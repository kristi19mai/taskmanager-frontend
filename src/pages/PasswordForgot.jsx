import { Form, useNavigation, redirect } from "react-router-dom";
import { FormRow } from "../Components/index";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;
const passwordForgotUrl = `${API_BASE_URL}/api/v1/auth/forgot-password`;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(passwordForgotUrl, data);
    //toast.success(response.data.msg);
    return redirect("/email-info-password");
  } catch (error) {
    toast.error(error.response?.data);
  }
  return null;
};
const PasswordForgot = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form className="form" method="POST">
      <h4>Passwort vergessen?</h4>
      <p>
        Kein Problem! Hier können Sie altes Passwort zurücksetzen und ein neues
        anlegen.
      </p>
      <FormRow
        type="email"
        name="email"
        title="E-Mail-Adresse eingeben"
        placeholder="ihre@email.de"
      />

      <button type="submit" className="btn btn-block" disabled={isSubmitting}>
        {isSubmitting ? "Wird gesendet..." : "Senden"}
      </button>
      <ToastContainer position="bottom-center" theme="light" autoClose="5000" />
    </Form>
  );
};

export default PasswordForgot;
