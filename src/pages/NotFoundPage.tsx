import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-bold">404</h1>

      <h2 className="mt-4 text-2xl font-semibold">Страница не найдена</h2>

      <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
        Возможно, адрес указан неверно или страница была перемещена. Проверьте
        ссылку или вернитесь на главную страницу.
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <ArrowLeft size={18} />
        Вернуться на главную
      </button>
    </div>
  );
};

export default NotFoundPage;
