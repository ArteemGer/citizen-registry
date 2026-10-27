import { UserRound, UserRoundPlus, UsersRound } from "lucide-react";
import StatisticsCard from "../components/DashboardPageComponents/StatisticsCard";
import RegistrationsChart from "../components/DashboardPageComponents/RegistrationsChart";
import AgeDistributionChart from "../components/DashboardPageComponents/AgeDistributionChart";

const DashboardPage = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatisticsCard
          title="Всего граждан"
          value={12480}
          description="Зарегистрировано в системе"
          icon={<UsersRound size={24} />}
          iconClassName="bg-blue-50 text-blue-600"
        />

        <StatisticsCard
          title="Мужчины"
          value={6120}
          description="49,0% от общего числа"
          icon={<UserRound size={24} />}
          iconClassName="bg-cyan-50 text-cyan-600"
        />

        <StatisticsCard
          title="Женщины"
          value={6360}
          description="51,0% от общего числа"
          icon={<UserRound size={24} />}
          iconClassName="bg-pink-50 text-pink-600"
        />

        <StatisticsCard
          title="Новые регистрации"
          value={248}
          description="За текущий месяц"
          icon={<UserRoundPlus size={24} />}
          iconClassName="bg-green-50 text-green-600"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <RegistrationsChart />
        <AgeDistributionChart />
      </div>
    </div>
  );
};

export default DashboardPage;
