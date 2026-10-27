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
          handle: {
            title: "Дешборд",
            description: "Обзор реестра граждан",
          },
        },
        {
          path: "/citizens",
          element: <CitizensPage />,
          handle: {
            title: "Реестр граждан",
            description: "Просмотр и учёт граждан",
          },
        },
        {
          path: "/citizens/:id",
          element: <CitizenDetails />,
          handle: {
            title: "Данные гражданина",
            description: "Основная информация о гражданине",
          },
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
