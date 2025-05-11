// routes.tsx
import { RouteObject } from "react-router-dom";
import App from "./App";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Eula from "./pages/Eula";
import NotFound from "./pages/NotFound";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Index /> },
      { path: "privacy", element: <Privacy /> },
      { path: "terms", element: <Terms /> },
      { path: "eula", element: <Eula /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;
