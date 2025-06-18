import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validierungsregeln
const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Passwort ist erforderlich")
    .min(6, "Passwort muss mindestens 6 Zeichen lang sein")
    .max(40, "Passwort muss höchstens 40 Zeichen lang sein"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwörter müssen überstimmen")
    .required("Passwort-Bestätigung ist erforderlich"),
});

const ResetPasswordForm = () => {
  return (
    <Formik
      // Anfangswerte der Felder
      initialValues={{ password: "", confirmPassword: "" }}
      // Validierungsregeln
      validationSchema={ResetPasswordSchema}
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
          <h4>Passwort zurücksetzen</h4>
          <p>Wählen Sie ein neues Passwort, um die Anmeldung abzuschliessen</p>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Neues Passwort
            </label>
            <Field
              type="password"
              name="password"
              id="password"
              className="form-input"
              placeholder="Neues Passwort"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="form-alert"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              Neues Passwort bestätigen
            </label>
            <Field
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="form-input"
              placeholder="Neues Passwort bestätigen"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="form-alert"
            />
          </div>

          <button
            type="submit"
            className="btn btn-block"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Passwort wird geändert.." : "Passwort ändern"}
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default ResetPasswordForm;
