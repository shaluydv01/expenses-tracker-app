import React, { useContext } from "react";
import "./SignUp.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/App_context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const { signUp } = useContext(AppContext);

  // --------------------------React Hook Form--------------//
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form submission handler
  const registerHandler = async (data) => {
    const { fname, lname, date, gender, email, password } = data;
    try {
      // Call the signUp API function
      const result = await signUp(fname, lname, date, gender, email, password);

      // Debugging: Check if the result is correct
      console.log("SignUp Result:", result);

      if (result && result.data) {
        // Show success toaster
        toast.success(result.data.message || "Registration successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });

        // Redirect to login page after 5 seconds
        setTimeout(() => {
          navigate("/login"); // Redirect to login page
        }, 5000);
      } else {
        toast.error("Something went wrong. Please try again!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error("Sign up error:", error);
      toast.error("An error occurred during sign-up. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <ToastContainer />

      {/* -----------------------Sign Up Contents---------------- */}
      <div className="signup-main-container">
        <p id="go-to-home">
          &#11160; Go to <Link to={"/"}>Home</Link> page
        </p>
        <p className="signup-logo-text">myExpenses</p>
        <div className="main-form-container">
          <form onSubmit={handleSubmit(registerHandler)}>
            <p className="larger-form-para">Create a new account</p>
            <p className="smaller-form-para">It's quick and easy.</p>
            <fieldset className="name-container">
              <input
                type="text"
                {...register("fname", { required: "First Name is required" })}
                id="fname"
                placeholder="First Name"
              />
              <input
                type="text"
                {...register("lname", { required: "Last Name is required" })}
                id="lname"
                placeholder="Last Name"
              />
            </fieldset>
            <p>{errors.fname?.message}</p>
            <p>{errors.lname?.message}</p>

            <fieldset className="date-select">
              <legend id="date-text">Date of birth ?</legend>
              <input
                type="date"
                {...register("date", { required: "Date of birth is required" })}
                id="date"
              />
            </fieldset>
            <p>{errors.date?.message}</p>

            <fieldset className="gender-select">
              <legend id="gender-text">Gender ?</legend>
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                value="male"
                {...register("gender", { required: "Gender is required" })}
                id="male"
              />
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                value="female"
                {...register("gender", { required: "Gender is required" })}
                id="female"
              />
              <label htmlFor="other">Other</label>
              <input
                type="radio"
                value="other"
                {...register("gender", { required: "Gender is required" })}
                id="other"
              />
            </fieldset>
            <p>{errors.gender?.message}</p>

            <fieldset className="email-container">
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                    message: "Invalid email format",
                  },
                })}
                id="email"
                placeholder="myexpenses@gmail.com"
              />
            </fieldset>
            <p>{errors.email?.message}</p>

            <fieldset className="password-container">
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
                id="password"
                placeholder="New Password"
              />
            </fieldset>
            <p>{errors.password?.message}</p>

            <button type="submit" className="signUp-button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
