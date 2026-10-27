import { Card } from "antd";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const ageData = [
  { age: "0–17", count: 1840 },
  { age: "18–30", count: 2760 },
  { age: "31–45", count: 3120 },
  { age: "46–60", count: 2680 },
  { age: "60+", count: 2080 },
];

const AgeDistributionChart = () => {
  return (
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
  );
};

export default AgeDistributionChart;
