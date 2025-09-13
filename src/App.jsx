import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Error,
  Tasks,
  Login,
  Register,
  PasswordForgot,
  EmailInfo,
  Verify,
  PasswordReset,
  EmailInfoPasswordReset,
  Logout,
  Landing,
} from "./pages/index.js";

import { action as actionRegister } from "./pages/Register.jsx";
import { action as actionPasswordForgot } from "./pages/PasswordForgot.jsx";
import { loader as loaderTasks } from "./pages/Tasks.jsx";
import { loader as loaderLanding } from "./pages/Landing.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing />, loader: loaderLanding },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register />, action: actionRegister },
      {
        path: "password-forgot",
        element: <PasswordForgot />,
        action: actionPasswordForgot,
      },
      { path: "/user/verify-email", element: <Verify /> },
      { path: "logout", element: <Logout /> },
      { path: "/user/reset-password", element: <PasswordReset /> },
      { path: "email-info", element: <EmailInfo /> },
      { path: "email-info-password", element: <EmailInfoPasswordReset /> },
      { path: "tasks", element: <Tasks />, loader: loaderTasks },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
