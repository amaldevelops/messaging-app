import Layout from "./components/Layout";
import App from "./App";
import ProjectInfo from "./components/ProjectInfo";
import Profile from "./components/Profile";
import ErrorPage from "./ErrorPage";
import Login from "./components/Login";
import Register from "./components/Register";
import UserMessages from "./components/UserMessages";
import Contacts from "./components/Contacts";
import ContactList from "./components/ContactList";
import ConversationView from "./components/ConversationView";

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
        path: "/messaging-app/projectinfo",
        element: <ProjectInfo />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/messaging-app/profile",
        element: <Profile />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/messaging-app/login",
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/messaging-app/register",
        element: <Register />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/messaging-app/contacts",
        element: <Contacts />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/messaging-app/messages",
        element: <UserMessages />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/messaging-app/messageview",
        element: <ConversationView />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/messaging-app/contactlist",
        element: <ContactList />,
        errorElement: <ErrorPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
