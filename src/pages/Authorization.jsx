import { useState } from "react";
import {
  PasswordForgotForm,
  LoginForm,
  RegistrationForm,
} from "../Components/index.js";

const Authorization = () => {
  const [activeForm, setActiveForm] = useState("login");

  return (
    <>
      <div className="btn-container">
        <button
          className={
            activeForm === "login" ? "btn login-btn" : "btn login-btn grey-btn"
          }
          onClick={() => setActiveForm("login")}
        >
          Login
        </button>
        <button
          className={activeForm === "register" ? "btn" : "btn grey-btn"}
          onClick={() => setActiveForm("register")}
        >
          Register
        </button>
        <button
          className={
            activeForm === "passVergessen"
              ? "btn btn-forgot-pass "
              : "btn grey-btn btn-forgot-pass"
          }
          onClick={() => setActiveForm("passVergessen")}
        >
          Passwort vergessen
        </button>
      </div>
      {activeForm === "login" ? (
        <LoginForm />
      ) : activeForm === "register" ? (
        <RegistrationForm />
      ) : (
        <PasswordForgotForm />
      )}
    </>
  );
};
export default Authorization;
