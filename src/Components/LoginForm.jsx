import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { fetchData } from "../axios/custom";
import { ToastContainer, toast } from "react-toastify";
import { useGlobalContext } from "../context/Context";

// Validierungsregeln
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ungültige E-Mail-Adresse")
    .required("E-Mail ist erforderlich"),
  password: Yup.string().required("Passwort ist erforderlich"),
});

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useGlobalContext();

  return (
    <Formik
      // Anfangswerte der Felder
      initialValues={{ email: "", password: "" }}
      // Validierungsregeln
      validationSchema={LoginSchema}
      // Was passiert beim Absenden
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const response = await fetchData({
            url: "/auth/login",
            method: "POST",
            data: values,
          });
          console.log(response.data.user);

          setUser(response.data.user);
          resetForm();
        } catch (error) {
          toast.error(error.response?.data);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <h4>Anmelden</h4>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              E-Mail
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              className="form-input"
              placeholder="ihre@email.de"
            />
            <ErrorMessage name="email" component="div" className="form-alert" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Passwort
            </label>
            <Field
              type="password"
              name="password"
              id="password"
              className="form-input"
              placeholder="Ihr Passwort"
            />

            <ErrorMessage
              name="password"
              component="div"
              className="form-alert"
            />
          </div>

          <button
            type="submit"
            className="btn btn-block"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Wird angemeldet..." : "Anmelden"}
          </button>
          <ToastContainer
            position="bottom-center"
            theme="light"
            autoClose="3000"
          />
        </Form>
      )}
    </Formik>
  );
};
export default LoginForm;
