import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import DashboardPage from "./pages/DashboardPage";
import CitizensPage from "./pages/CitizensPage";
import CitizenDetails from "./pages/CitizenDetails";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./components/MainLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
        {
          path: "/citizens",
          element: <CitizensPage />,
        },
        {
          path: "/citizens/:id",
          element: <CitizenDetails />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
