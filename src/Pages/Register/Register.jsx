import {React , useState} from "react";
import { Link } from "react-router-dom";
import Input from "../../Components/Input/Input";
import "./Register.css";

export default function Register() {
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
        <h2 className="login-form__header">Sign Up your account</h2>
        <Input label="Username" name="username" value={inputValues.username || ""} onInputChange={handleInputChange}  placeholder="jeff" type="text"></Input>
        <Input label="Password" name="password" value={inputValues.password || ""} onInputChange={handleInputChange} placeholder="Enter your password" type="password" forgot={false}></Input>
        <Input label="Repeat Password" name="rPassword" value={inputValues.rPassword || ""} onInputChange={handleInputChange}  placeholder="Enter your password" type="password" forgot={false}></Input>
        <Input label="Email" name="email" value={inputValues.email || ""} onInputChange={handleInputChange} placeholder="balamia@gmail.com" type="email"></Input>
        <Input label="Mobile Number" name="phone" value={inputValues.phone || ""} onInputChange={handleInputChange} placeholder="09383013300" type="text"></Input>
        <Input label="Display Name" name="dName" value={inputValues.dName || ""} onInputChange={handleInputChange} placeholder="amin" type="text"></Input>
        <Input value="Sign Up" type="submit"></Input>
        <p className="login-form__register">
           Registered?
          <Link to={"/login"}> Login!</Link>
        </p>
      </form>
    </>
  );
}
