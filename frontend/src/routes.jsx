import Layout from "./components/Layout";
import App from "./App";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/messaging-app",
        element: <App />,
        errorElement: <ErrorPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
