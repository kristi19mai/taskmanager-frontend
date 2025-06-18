import { useState } from "react";
import "./App.css";
import TodoListe from "./Components/TodoListe";
import LoginForm from "./Components/auth/LoginForm";
import RegistrationForm from "./Components/auth/RegistrationForm";

import PasswordForgotForm from "./Components/auth/PasswordForgotForm";
import ResetPasswordForm from "./Components/auth/ResetPasswordForm";
import data from "./mockdata.json";
import { act } from "react";
function App() {
  const [todos, setTodos] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const [activeForm, setActiveForm] = useState("login");

  return (
    <main>
      <div className="btn-container">
        <button
          className={activeForm === "login" ? "btn" : "btn grey-btn"}
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
          className={activeForm === "passVergessen" ? "btn" : "btn grey-btn"}
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

      {/* <TodoListe todos={todos} loading={isLoading} /> */}
    </main>
  );
}

export default App;
