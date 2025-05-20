import Layout from "./components/Layout";
import App from "./App";
import ProjectInfo from "./components/ProjectInfo";
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
      {
        path:"/messaging-app/projectinfo",
        element:<ProjectInfo/>,
        errorElement:<ErrorPage/>
      }
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
