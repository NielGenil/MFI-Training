import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateStudentPage from "./pages/create-student-page.jsx";
import IndexPage from "./pages/index.jsx";
import StepOne from "./pages/step-one.jsx";

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
