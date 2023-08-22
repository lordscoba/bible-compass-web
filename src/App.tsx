import { createBrowserRouter } from "react-router-dom";
import { ConfirmPage, Donate, ErrorPage, Home } from "./screens";
import Acknowledgement from "./screens/Acknowledgement";
import Privacy from "./screens/Privacy";
import Terms from "./screens/Terms";

// import ErrorPage from "./error-page";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/donate",
    element: <Donate />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/verify",
    element: <ConfirmPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/terms",
    element: <Terms />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/acknowledgement",
    element: <Acknowledgement />,
    errorElement: <ErrorPage />,
  },
]);

export default App;
