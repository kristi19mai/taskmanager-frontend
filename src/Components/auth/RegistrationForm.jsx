import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validierungsregeln
const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name muss mindestens 3 Zeichen lang sein")
    .max(40, "Name muss höchstens 40  Zeichen lang sein")
    .required("Name ist erforderlich"),
  email: Yup.string()
    .required("Email ist erforderlich")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Ungültige E-Mail-Adresse"
    ),
  password: Yup.string()
    .required("Passwort ist erforderlich")
    .min(6, "Passwort muss mindestens 6 Zeichen lang sein")
    .max(40, "Passwort muss höchstens 40 Zeichen lang sein"),
  acceptTerms: Yup.boolean().oneOf(
    [true],
    "Sie müssen die Nutzungsbedingungen akzeptieren"
  ),
});

const RegistrationForm = () => {
  return (
    <Formik
      // Anfangswerte der Felder
      initialValues={{ name: "", email: "", password: "", acceptTerms: false }}
      // Validierungsregeln
      validationSchema={RegistrationSchema}
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
          <h4>Registrieren</h4>

          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Ihr Name
            </label>
            <Field
              type="text"
              name="name"
              id="name"
              className="form-input"
              placeholder="Ihr Name"
            />
            <ErrorMessage name="name" component="div" className="form-alert" />
          </div>
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
          <div className="form-group">
            <div className="checkbox-container">
              {" "}
              <Field
                type="checkbox"
                name="acceptTerms"
                id="acceptTerms"
                
              />
              <label htmlFor="acceptTerms" className="form-label">
                Ich akzeptiere die Nutzungsbedingungen
              </label>
            </div>

            <ErrorMessage
              name="acceptTerms"
              component="div"
              className="form-alert"
            />
          </div>
          <button
            type="submit"
            className="btn btn-block"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Wird registriert..." : "Registrieren"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
