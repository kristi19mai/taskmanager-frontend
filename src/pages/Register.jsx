import { Form, useNavigation, redirect } from "react-router-dom";
import { FormRow } from "../Components/index";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;
const registerUrl = `${API_BASE_URL}/api/v1/auth/register`;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(registerUrl, data);
    //toast.success(response.data.msg);
    return redirect("/email-info");
  } catch (error) {
    toast.error(error.response?.data);
  }
  return null;
};

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form className="form" method="POST">
      <h4>Registrieren</h4>
      <FormRow
        type="text"
        placeholder="Ihr Name"
        name="name"
        title="Name"
        maxlength={40}
        defaultValue="Khristina"
      />
      <FormRow
        type="email"
        placeholder="Ihre@email.de"
        name="email"
        title="Email"
        defaultValue="artkristi19mai@gmail.com"
      />
      <FormRow
        type="password"
        placeholder="Ihr Passwort"
        name="password"
        title="Passwort"
        minlength={6}
        maxlength={40}
        defaultValue="secret"
      />

      <div className="checkbox-container">
        <input type="checkbox" name="acceptTerms" id="acceptTerms" required />
        <label htmlFor="acceptTerms" className="form-label">
          Ich akzeptiere die Nutzungsbedingungen
        </label>
      </div>

      <button type="submit" className="btn btn-block">
        {isSubmitting ? "Wird registriert..." : "Registrieren"}
      </button>
      <ToastContainer position="top-center" theme="light" autoClose="3000" />
    </Form>
  );
};

export default Register;
