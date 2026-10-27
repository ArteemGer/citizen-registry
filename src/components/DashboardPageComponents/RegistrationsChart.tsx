import { Card } from "antd";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const registrationsData = [
  { month: "Май", count: 120 },
  { month: "Июн", count: 180 },
  { month: "Июл", count: 145 },
  { month: "Авг", count: 230 },
  { month: "Сен", count: 195 },
  { month: "Окт", count: 248 },
];

const RegistrationsChart = () => {
  return (
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
  );
};

export default RegistrationsChart;
