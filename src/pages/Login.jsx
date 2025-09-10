import { Form, useNavigation, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FormRow } from "../Components/index";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useGlobalContext } from "../context/Context";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const loginUrl = `${API_BASE_URL}/api/v1/auth/login`;

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const navigate = useNavigate();

  const { updateUser, user } = useGlobalContext();

  const sendLoginData = async () => {
    try {
      const response = await axios.post(
        loginUrl,
        {
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true }
      );
      const { name, userId, role } = response.data.user;

      toast.success(`Erfolgreich angemeldet`);
      updateUser({ name, userId, role });
      const timeoutId = setTimeout(() => {
        navigate("/tasks");
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
    <Form className="form" onSubmit={sendLoginData}>
      <h4>Anmelden</h4>
      <FormRow
        type="email"
        placeholder="Ihre@email.de"
        name="email"
        title="Email"
        value={formData.email}
        handleChange={({ target }) => handleChange(target.name, target.value)}
      />
      <FormRow
        type="password"
        placeholder="Ihr Passwort"
        name="password"
        title="Passwort"
        value={formData.password}
        handleChange={({ target }) => handleChange(target.name, target.value)}
      />
      <p style={{ width: "100%", textAlign: "left" }}>
        <Link
          to="/password-forgot"
          style={{ color: "var(--secondary-coffee)", fontWeight: "600" }}
        >
          Passwort vergessen?
        </Link>
      </p>
      <button type="submit" className="btn btn-block">
        {isSubmitting ? "Wird angemeldet..." : "Anmelden"}
      </button>
      <p>
        Haben Sie noch keinen Account?&nbsp;
        <Link
          to="/register"
          style={{ color: "var(--secondary-coffee)", fontWeight: "600" }}
        >
          Registrieren
        </Link>
      </p>
      <ToastContainer position="top-center" theme="light" autoClose="2000" />
    </Form>
  );
};

export default Login;
