import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Error, Authorization, Tasks } from "./pages/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { path: "auth", element: <Authorization /> },
      { index: true, element: <Tasks /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;

  // return (
  //   <main>
  //     {user?.userId ? (
  //       <Sidebar />
  //     ) : (
  //     <Authorisation/>
  //     )}
  //   </main>
  // );
}

export default App;
