import React from "react";
import "./SignUp.css";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  console.log(errors);

  return (
    <>
      <div className="signup-main-container">
        <p className="signup-logo-text">myExpenses</p>
        <div className="main-form-container">
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <p className="larger-form-para">Create a new account</p>
            <p className="smaller-form-para">It's quick and easy.</p>
            <fieldset className="name-container">
              <input
                type="text"
                {...register("fname", { required: "This is required...😊" })}
                id="fname"
                placeholder="First Name"
              />
              <input
                type="text"
                {...register("lname", { required: "This is required...😊" })}
                id="lname"
                placeholder="Last Name"
              />
            </fieldset>

            <p>{errors.fname?.message}</p>

            <fieldset className="date-select">
              <legend id="date-text">Date of birth ?</legend>
              <input
                type="date"
                {...register("date", {
                  required: "This is required...😊",
                })}
                id="date"
              />
            </fieldset>

            <p>{errors.date?.message}</p>

            <fieldset className="gender-select">
              <legend id="gender-text">Gender ?</legend>
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                {...register("radio")}
                value="male"
                id="male"
              />
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                {...register("radio")}
                value="female"
                id="female"
              />

              <label htmlFor="other">Other</label>
              <input
                type="radio"
                {...register("radio")}
                value="other"
                id="other"
              />
            </fieldset>

            <fieldset className="email-container">
              <input
                type="email"
                {...register("email", { required: "This is required...😊" })}
                id="email"
                placeholder="myexpenses@gmail.com"
              />
            </fieldset>

            <p>{errors.email?.message}</p>

            <fieldset className="password-container">
              <input
                type="password"
                {...register("password", {
                  required: "This is required...😊",
                  minLength: {
                    value: 8,
                    message: "Required length is 8",
                  },
                })}
                id="password"
                placeholder="New Password"
              />
            </fieldset>

            <p>{errors.password?.message}</p>

            <button type="submit" className="signUp-button" onClick={()=>"./user"}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
