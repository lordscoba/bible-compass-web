import { createBrowserRouter } from "react-router-dom";
import { ConfirmPage, Donate, ErrorPage, Home } from "./screens";

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
]);

export default App;
