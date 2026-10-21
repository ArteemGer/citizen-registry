import { Card, Divider, Statistic } from "antd";
import { UserRound, UserRoundPlus, UsersRound } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const registrationsData = [
  { month: "Май", count: 120 },
  { month: "Июн", count: 180 },
  { month: "Июл", count: 145 },
  { month: "Авг", count: 230 },
  { month: "Сен", count: 195 },
  { month: "Окт", count: 248 },
];

const ageData = [
  { age: "0–17", count: 1840 },
  { age: "18–30", count: 2760 },
  { age: "31–45", count: 3120 },
  { age: "46–60", count: 2680 },
  { age: "60+", count: 2080 },
];

const DashboardPage = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card>
          <div className="flex items-center gap-4">
            <span className="inline-flex size-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <UsersRound size={24} />
            </span>
            <Statistic title="Всего граждан" value={12480} />
          </div>

          <Divider size="small" />
          <p className="text-xs text-slate-500">Зарегистрировано в системе</p>
        </Card>
        <Card>
          <div className="flex items-center gap-4">
            <span className="inline-flex size-12 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600">
              <UserRound size={24} />
            </span>
            <Statistic title="Мужчины" value={6120} />
          </div>

          <Divider size="small" />
          <p className="text-xs text-slate-500">49,0% от общего числа</p>
        </Card>
        <Card>
          <div className="flex items-center gap-4">
            <span className="inline-flex size-12 items-center justify-center rounded-lg bg-pink-50 text-pink-600">
              <UserRound size={24} />
            </span>
            <Statistic title="Женщины" value={6360} />
          </div>

          <Divider size="small" />
          <p className="text-xs text-slate-500">51,0% от общего числа</p>
        </Card>
        <Card>
          <div className="flex items-center gap-4">
            <span className="inline-flex size-12 items-center justify-center rounded-lg bg-green-50 text-green-600">
              <UserRoundPlus size={24} />
            </span>
            <Statistic title="Новые регистрации" value={248} />
          </div>
          <Divider size="small" />
          <p className="text-xs text-slate-500">За текущий месяц</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <Card>
          <div className="flex flex-col gap-4">
            <h2 className="text-base font-semibold text-slate-800">
              Регистрации по месяцам
            </h2>
            <BarChart
              style={{
                width: "100%",
                aspectRatio: 1.618,
              }}
              responsive
              data={registrationsData}
            >
              <CartesianGrid vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="month" />
              <YAxis width="auto" />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" radius={[10, 10, 0, 0]} />
            </BarChart>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col gap-4">
            <h2 className="text-base font-semibold text-slate-800">
              Распределение по возрасту
            </h2>
            <BarChart
              style={{
                width: "100%",
                aspectRatio: 1.618,
              }}
              responsive
              data={ageData}
            >
              <CartesianGrid vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="age" />
              <YAxis width="auto" />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" radius={[10, 10, 0, 0]} />
            </BarChart>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
