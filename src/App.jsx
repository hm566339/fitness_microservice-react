import "./App.css";
import { Home } from "./page/Home";
import { RportAndDetailForm } from "./page/RportAndDetailForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/report",
      element: <RportAndDetailForm />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
