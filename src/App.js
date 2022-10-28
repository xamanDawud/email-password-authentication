import "bootstrap/dist/css/bootstrap.min.css";
import TailwindForm from "./components/TailwindForm/TailwindForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import LoginWithBootstrapForm from "./components/LoginWithBootstrapForm/LoginWithBootstrapForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <TailwindForm /> },
        { path: "/register", element: <TailwindForm /> },
        { path: "/login", element: <LoginWithBootstrapForm /> },
      ],
    },
  ]);
  return (
    <div className="mx-auto align-center w-50">
      {/* <NormalFormValidation/> */}
      {/* <ReactBootstrapForm /> */}
      {/* <BootstrapForm /> */}
      {/* <TailwindForm /> */}
      {/* <LoginWithBootstrapForm /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
