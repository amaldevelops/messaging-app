import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routes from "./routes.jsx"
import "./index.css";
import App from "./App.jsx";

const router=createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
  <RouterProvider router={router}/>

  </StrictMode>
);
