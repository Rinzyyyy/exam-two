import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/exam",
    element: <Home />,
  },
]);

export default router;
