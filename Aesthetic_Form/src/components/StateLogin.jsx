import { useState } from "react";
import Inputs from "./Inputs";
import {isEmail, hasMinLength, isNotEmpty} from '../util/validation.js';
import { useInput } from "../hooks/useInput.js";

export default function StateLogin() {

  const {
    value:emailValue,
    handleInputChange:handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError
  } =useInput('',(value) => isEmail(value) && isNotEmpty(value))

  const {
    value:passwordValue,
    handleInputChange:handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError
  } =useInput('',(value) => hasMinLength(value,6))


  function handleSubmit(event){
    event.preventDefault();
    if(emailHasError || passwordHasError){
      return;
    }

    console.log(emailValue,passwordValue)

  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Inputs 
        label="Email"
        id="email"
        type="email"
        name="email"
        onBlur={handleEmailBlur}
        onChange={handleEmailChange} 
        value={emailValue}
        error={emailHasError && 'Enter a valid Email!'}/>

        <Inputs 
        label="Password"
        id="password"
        type="password"
        name="password"
        onBlur={handlePasswordBlur}
        onChange={handlePasswordChange} 
        value={passwordValue}
        error={passwordHasError && 'Enter a valid Password'}/>

      </div>

      <p className="form-actions">
        <button type="reset"
        className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
