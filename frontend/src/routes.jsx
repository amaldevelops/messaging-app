import App from "./App";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/messaging-app",
    element: <App />,
    errorElement:<ErrorPage/>
  },
];

export default routes;
