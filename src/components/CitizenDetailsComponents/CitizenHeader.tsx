import { Avatar, Button, Tag, type FormInstance } from "antd";
import { CalendarDays, MapPin, SquarePen, UserRound } from "lucide-react";
import type { Citizen, CitizenFormValues } from "../../types/citizen";

interface CitizenHeaderProps {
  citizen: Citizen;
  formatDate: (date: string) => string;
  isEditing: boolean;
  handleCancel: () => void;
  handleEdit: () => void;
  form: FormInstance<CitizenFormValues>;
}

const CitizenHeader = ({
  citizen,
  formatDate,
  isEditing,
  handleCancel,
  handleEdit,
  form,
}: CitizenHeaderProps) => {
  return (
    <div className="mb-4 flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center">
      <Avatar
        size={72}
        className="shrink-0"
        style={{
          backgroundColor: "#dbeafe",
          color: "#1d4ed8",
          fontSize: 24,
        }}
      >
        {citizen.firstName[0]}
        {citizen.lastName[0]}
      </Avatar>

      <div className="w-full flex md:justify-between flex-col md:flex-row gap-4">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <h2 className="text-xl font-semibold text-slate-800">
              {citizen.lastName} {citizen.firstName} {citizen.middleName ?? ""}
            </h2>

            <Tag color="blue">ID: {citizen.id}</Tag>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <CalendarDays size={16} />
              {formatDate(citizen.birthDate)}
            </span>

            <span className="flex items-center gap-2">
              <UserRound size={16} />
              {citizen.gender === "male" ? "Мужской" : "Женский"}
            </span>

            <span className="flex items-center gap-2">
              <MapPin size={16} />
              {citizen.address.city}
            </span>
          </div>
        </div>

        <div className="flex shrink-0 items-start md:justify-end">
          {isEditing ? (
            <div className="flex flex-wrap  gap-2">
              <Button onClick={handleCancel}>Отмена</Button>

              <Button type="primary" onClick={() => form.submit()}>
                Сохранить
              </Button>
            </div>
          ) : (
            <Button
              onClick={handleEdit}
              icon={<SquarePen size={14} />}
              type="primary"
            >
              Редактировать
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CitizenHeader;
