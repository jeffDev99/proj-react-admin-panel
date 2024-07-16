import { React, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../Components/Input/Input";
import "./Login.css";
export default function Login() {
  // ? must read about it
  const [inputValues, setInputValues] = useState({});
  const handleInputChange = (name, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  return (
    <>
      <figure className="login-logo-wrapper">
        <img src="images/Logo.svg" className="login-logo-img" alt="" srcset="" />
      </figure>
      <form action="" method="GET" className="login-form">
        <h2 className="login-form__header">Login to your account</h2>
        <Input label="Email" name="email" value={inputValues.email || ""} onInputChange={handleInputChange} placeholder="balamia@gmail.com" type="email"></Input>
        <Input label="Password" name="password" value={inputValues.password || ""} onInputChange={handleInputChange} placeholder="Enter your password" type="password" forgot={true}></Input>
        <Input value="login" type="submit"></Input>
        <p className="login-form__register">
          Not Registered?
          <Link to={"/register"}> Register!</Link>
        </p>
      </form>
    </>
  );
}
