import {
  Form,
  useNavigation,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { FormRow } from "../components/index.js";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useState, useEffect } from "react";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;
const passwordResetUrl = `${API_BASE_URL}/api/v1/auth/reset-password`;

const PasswordReset = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [formIsValid, setFormIsValid] = useState(true);
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isSubmitting = navigation.state === "submitting";
  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    if (formData.password !== formData.confirmPassword) {
      setFormIsValid(false);
    } else {
      setFormIsValid(true);
    }
  }, [formData]);

  const changePassword = async () => {
    try {
      const response = await axios.post(passwordResetUrl, {
        password: formData.password,
        token: query.get("token"),
        email: query.get("email"),
      });
      toast.success(response.data.msg);
      const timeoutId = setTimeout(() => {
        navigate("/");
      }, 2000);
      return () => {
        clearTimeout(timeoutId);
      };
    } catch (error) {
      toast.error(error.response?.data);
    }
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Form className="form" onSubmit={changePassword}>
      <h4>Passwort zurücksetzen</h4>
      <p>Wählen Sie ein neues Passwort, um die Anmeldung abzuschliessen.</p>
      <FormRow
        type="password"
        name="password"
        title="Neues Passwort"
        placeholder="Neues Passwort"
        minlength={6}
        maxlength={40}
        value={formData.password}
        handleChange={({ target }) => handleChange(target.name, target.value)}
      />
      <FormRow
        type="password"
        name="confirmPassword"
        title="Neues Passwort bestätigen"
        placeholder="Neues Passwort bestätigen"
        value={formData.confirmPassword}
        handleChange={({ target }) => handleChange(target.name, target.value)}
      />
      {!formIsValid && (
        <p className="alert alert-danger">
          Passwort und Passwortbestätigung müssen identisch sein.
        </p>
      )}
      <button
        type="submit"
        className="btn btn-block"
        disabled={!formIsValid || isSubmitting}
      >
        {isSubmitting ? "Passwort wird geändert.." : "Passwort ändern"}
      </button>
      <ToastContainer position="top-center" theme="light" autoClose="2000" />
    </Form>
  );
};

export default PasswordReset;
