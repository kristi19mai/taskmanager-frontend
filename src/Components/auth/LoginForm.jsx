import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";

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
  return (
    <Formik
      // Anfangswerte der Felder
      initialValues={{ email: "", password: "" }}
      // Validierungsregeln
      validationSchema={LoginSchema}
      // Was passiert beim Absenden
      onSubmit={(values, { setSubmitting }) => {
        // Simulieren wir einen Server-Aufruf
        setTimeout(() => {
          alert(
            "Sie haben folgende Daten gesendet: \n" +
              JSON.stringify(values, null, 2)
          );
          setSubmitting(false);
        }, 500);
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
        </Form>
      )}
    </Formik>
  );
};
export default LoginForm;
