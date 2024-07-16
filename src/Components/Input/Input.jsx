import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Eye , EyeSlash ,DocumentUpload } from "iconsax-react";

import "./Input.css";

export default function Input(props) {
  const [isInputActive, setIsInputActive] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleFocusInput = () => {
    setIsInputActive(true);
  };

  const handleBlurInput = () => {
    setIsInputActive(false);
  };

  const togglePasswordVisibility = () => {
    setShowPass(!showPass);
  };

  const handleInputChange = (event) => {
    props.onInputChange(props.name, event.target.value);
  };

  if (props.type === "submit") {
    return (
      <>
        <label htmlFor="" className="input__label">
          {props.label}
        </label>
        <div>
          <input
            type={props.type}
            value={props.value}
            className="input__submit"
            name=""
            id=""
          />
        </div>
      </>
    );
  } else if (props.type === "password") {
    return (
      <>
        <label htmlFor="" className="input__label d-flex justify-content-between">
          {props.label}
          {props.forgot ? (
            <Link to={"/"} className="input__label-forgot">
              Forgot?
            </Link>
          ) : (
            ""
          )}
        </label>
        <div className={`input ${isInputActive ? "active" : ""}`} style={{position:"relative"}}>
          <input
            type={showPass ? "text" : "password"}
            placeholder={props.placeholder}
            className="input__inp"
            name=""
            id=""
            value={props.value}
            onChange={handleInputChange}
            onFocus={handleFocusInput}
            onBlur={handleBlurInput}
          />
          <span onClick={togglePasswordVisibility} style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}>
            {showPass ? (<EyeSlash className="input__icon"/>) : (<Eye className="input__icon"/>)}
          </span>
        </div>
      </>
    );
  }else if(props.type === "file"){
    return (
      <>
        <label htmlFor="uploadFile" className="input-file__label d-flex justify-content-between align-items-center">
          <span>use only xlsx or csv format</span>
          <DocumentUpload/>
        </label>
        <div className="input-file">
          <input
            type={props.type}
            placeholder={props.placeholder}
            className="input-file__inp"
            name="file"
            id="uploadFile"
            value={props.value}
            accept=".csv,.xlsx"
            onChange={handleInputChange}
            onFocus={handleFocusInput}
            onBlur={handleBlurInput}
          />
        </div>
      </>
    );
  }
   else {
    return (
      <>
        <label htmlFor="" className="input__label">
          {props.label}
        </label>
        <div className={`input ${isInputActive ? "active" : ""}`}>
          <input
            type={props.type}
            placeholder={props.placeholder}
            className="input__inp"
            name=""
            id=""
            value={props.value}
            onChange={handleInputChange}
            onFocus={handleFocusInput}
            onBlur={handleBlurInput}
          />
        </div>
      </>
    );
  }
}
