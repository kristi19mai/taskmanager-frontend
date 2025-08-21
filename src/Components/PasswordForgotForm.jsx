import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validierungsregeln
const PasswordForgotSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ungültige E-Mail-Adresse")
    .required("E-Mail ist erforderlich"),
});

const PasswordForgotForm = () => {
  return (
    <Formik
      // Anfangswerte der Felder
      initialValues={{ email: "" }}
      // Validierungsregeln
      validationSchema={PasswordForgotSchema}
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
          <h4>Passwort vergessen?</h4>
          <p>
            Kein Problem! Hier können Sie altes Passwort zurücksetzen und ein
            neues anlegen.
          </p>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              E-Mail-Adresse eingeben
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

          <button
            type="submit"
            className="btn btn-block"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Wird gesendet..." : "Senden"}
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default PasswordForgotForm;
