import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";

const NotFound = () => {
  return (
    <div className="not_found">
      <h1 className="display-4">404</h1>
      <p>страница не доступна</p>
    </div>
  );
};

export default function AppRoutes() {
  return useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    { path: "*", element: <NotFound /> },
  ]);
}
