import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({defaultValues: {
    email: "",
    password: ""
  }});

  console.log(errors);

  return (
    <>
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
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <input
              className="input-login"
              type="email"
              {...register("email", { required: "This is required...😊" })}
              id="email"
              placeholder="Enter your email"
            />
            <p>{errors.email?.message}</p>
            <input
              className="input-login"
              type="password"
              {...register("password", {
                required: "This is required...😊",
                minLength: {
                  value: 8,
                  message: "Required length is 8",
                },
              })}
              id="password"
              placeholder="Password"
            />
            <p>{errors.password?.message}</p>
            <button type="submit" className="login-btn btn">
              Login
            </button>
            <p className="forget-text frm-text">
              <Link>Forget Password ?</Link>
            </p>
            <button className="create-btn btn"><Link to={"/sign-up"}>Create Account</Link></button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
