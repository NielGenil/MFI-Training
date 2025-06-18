import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateStudentPage from "./pages/create-student-page.jsx";
import IndexPage from "./pages/index.jsx";
import StepOne from "./pages/step-one.jsx";
import StepTwo from "./pages/step-two.jsx";
import StepThree from "./pages/step-three.jsx";
import StepFour from "./pages/step-four.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "create-student",
        element: <CreateStudentPage />,
        children: [
          {
            path: "",
            element: <StepOne />,
          },
          {
            path: "step-two",
            element: <StepTwo />,
          },
          {
            path: "step-three",
            element: <StepThree />,
          },
          {
            path: "step-four",
            element: <StepFour />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
