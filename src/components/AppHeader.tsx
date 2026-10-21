import { ChevronDown, Landmark, User } from "lucide-react";

const AppHeader = () => {
  return (
    <div className="flex h-full w-full items-center justify-between gap-4">
      <div className="flex min-w-0 items-center gap-3">
        <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-blue-600 text-white">
          <Landmark size={22} />
        </div>

        <div className="min-w-0">
          <p className="truncate text-base font-semibold text-slate-800">
            Реестр граждан
          </p>
          <p className="hidden text-xs text-slate-500 sm:block">
            Система учёта и поддержки
          </p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg p-1 hover:bg-slate-50"
        >
          <span className="grid size-9 place-items-center rounded-full bg-blue-50 text-blue-700">
            <User size={20} />
          </span>

          <span className="hidden text-left sm:block">
            <span className="block text-sm font-medium text-slate-700">
              Олег Олегов
            </span>
            <span className="block text-xs text-slate-500">Администратор</span>
          </span>

          <ChevronDown className="hidden text-slate-400 sm:block" size={16} />
        </button>
      </div>
    </div>
  );
};

export default AppHeader;
