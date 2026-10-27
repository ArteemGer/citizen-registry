import { Card, Divider, Statistic } from "antd";
import type { ReactNode } from "react";

interface StatisticsCardProps {
  title: string;
  value: number;
  description: string;
  icon: ReactNode;
  iconClassName: string;
}

const StatisticsCard = ({
  title,
  value,
  description,
  icon,
  iconClassName,
}: StatisticsCardProps) => {
  return (
    <Card>
      <div className="flex items-center gap-4">
        <span
          className={`inline-flex size-12 shrink-0 items-center justify-center rounded-lg ${iconClassName}`}
        >
          {icon}
        </span>

        <Statistic title={title} value={value} />
      </div>

      <Divider size="small" />

      <p className="text-xs text-slate-500">{description}</p>
    </Card>
  );
};

export default StatisticsCard;
