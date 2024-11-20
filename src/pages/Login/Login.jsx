import React, { useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AppContext } from "../../context/App_context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      gmail: "",
      password: "",
    },
  });

  const loginHandler = async (data) => {
    // e.preventDefault();
    const { gmail, password } = data;
    const result = await login(gmail, password);

    toast.success(result.data.message, {
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

    // console.log(result.data);

    setTimeout(() => {
      navigate('/');
    }, 5000);
  };

  return (
    <>
      <ToastContainer />

      <p id="go-to-home">
        &#11160; Go to <Link to={"/"}>Home</Link> page
      </p>
      <div className="login-container">
        <div className="login-page-text">
          <p className="larger-text">myExpenses</p>
          <p className="smaller-text">
            myExpenses keeps track of your expenses and incomes
          </p>
        </div>

        <div className="form-content-container">
          <form
            className="form-container"
            onSubmit={handleSubmit(loginHandler)} // Use handleSubmit to manage the form
          >
            <input
              {...register("gmail", { required: "This is required...😊" })}
              className="input-login"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
            {errors.gmail && <p>{errors.gmail.message}</p>}{" "}
            {/* Error handling for gmail */}
            <input
              {...register("password", {
                required: "This is required...😊",
                minLength: {
                  value: 8,
                  message: "Required length is 8",
                },
              })}
              className="input-login"
              type="password"
              id="password"
              placeholder="Password"
            />
            {errors.password && <p>{errors.password.message}</p>}{" "}
            {/* Error handling for password */}
            <button type="submit" className="login-btn btn">
              Login
            </button>
            <p className="forget-text frm-text">
              <Link>Forget Password ?</Link>
            </p>
            <button className="create-btn btn">
              <Link to={"/sign-up"}>Create Account</Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
