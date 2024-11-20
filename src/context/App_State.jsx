import React, { useEffect, useState } from "react";
import { AppContext } from "./App_context";
import axios from "axios";
import { toast } from "react-toastify";

const App_State = (props) => {
  const url = "http://localhost:5000/api";
  
  const [token, setToken] = useState(localStorage.getItem('token') || "");

  useEffect(() => {
    // If a token exists in localStorage, try to auto-login or initialize login
    if (token) {
      axios.defaults.headers["Authorization"] = `Bearer ${token}`; // set token for further API requests
    }
  }, [token]);

  // Register function
  const signUp = async (fname, lname, gender, date, gmail, password) => {
    try {
      const api = await axios.post(
        `${url}/signUp`,
        { fname, lname, date, gender, gmail, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (api.data.message) {
        toast.success(api.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      }

      return api.data;  // Returning response data (such as success message, etc.)
    } catch (error) {
      console.error("Sign-up Failed", error);
      toast.error("Sign-up failed. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  };

  // Login function
  const login = async (gmail, password) => {
    try {
      const api = await axios.post(
        `${url}/login`,
        { gmail, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      // Store the token in localStorage and set it in state
      if (api.data.token) {
        setToken(api.data.token);
        localStorage.setItem("token", api.data.token);  // Store token to keep user logged in after refresh
        axios.defaults.headers["Authorization"] = `Bearer ${api.data.token}`;  // Set authorization header
        toast.success(`Welcome ${api.data.message}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      }

      return api.data;
    } catch (error) {
      console.log("Login Failed", error);
      toast.error("Invalid credentials. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  };

  // Logout function (clear token)
  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
    toast.info("Logged out successfully.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <AppContext.Provider value={{ login, signUp, logout }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default App_State;
