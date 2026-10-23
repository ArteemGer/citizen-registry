import { useNavigate, useParams } from "react-router";
import { citizensData } from "../data/citizens";
import { Card, Descriptions, Avatar, Tag, Button } from "antd";
import {
  ArrowLeft,
  Briefcase,
  CalendarDays,
  GraduationCap,
  IdCardLanyard,
  MapPin,
  UserRound,
  Users,
} from "lucide-react";

const CitizenDetails = () => {
  const { id } = useParams();

  const citizen = citizensData.find((citizen) => citizen.id === id);

  if (!citizen) {
    return <div>Гражданин не найден</div>;
  }

  const formatDate = (date: string) =>
    new Date(`${date}T00:00:00`).toLocaleDateString("ru-RU");

  const navigate = useNavigate();
  return (
    <>
      <Button
        type="text"
        icon={<ArrowLeft size={16} />}
        onClick={() => navigate("/citizens")}
        className="mb-2"
      >
        К реестру
      </Button>
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

        <div className="min-w-0 flex-1">
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
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <Card
          title={
            <span className="flex items-center gap-2">
              <UserRound size={18} className="text-blue-600" />
              Основная информация
            </span>
          }
        >
          <Descriptions column={1} size="small">
            <Descriptions.Item label="ФИО">
              {citizen.lastName} {citizen.firstName} {citizen.middleName ?? ""}
            </Descriptions.Item>
            <Descriptions.Item label="Дата рождения">
              {formatDate(citizen.birthDate)}
            </Descriptions.Item>
            <Descriptions.Item label="Пол">
              {citizen.gender === "male" ? "Мужской" : "Женский"}
            </Descriptions.Item>
          </Descriptions>
        </Card>
        <Card
          title={
            <span className="flex items-center gap-2">
              <IdCardLanyard size={18} className="text-blue-600" />
              Паспорт
            </span>
          }
        >
          <Descriptions column={1} size="small">
            <Descriptions.Item label="Серия">
              {citizen.passport.series}
            </Descriptions.Item>

            <Descriptions.Item label="Номер">
              {citizen.passport.number}
            </Descriptions.Item>

            <Descriptions.Item label="Кем выдан">
              {citizen.passport.issuedBy}
            </Descriptions.Item>

            <Descriptions.Item label="Дата выдачи">
              {formatDate(citizen.passport.issuedAt)}
            </Descriptions.Item>
          </Descriptions>
        </Card>
        <Card
          title={
            <span className="flex items-center gap-2">
              <MapPin size={18} className="text-blue-600" />
              Адрес
            </span>
          }
        >
          <Descriptions column={1} size="small">
            <Descriptions.Item label="Регион">
              {citizen.address.region}
            </Descriptions.Item>
            <Descriptions.Item label="Город">
              {citizen.address.city}
            </Descriptions.Item>
            <Descriptions.Item label="Улица">
              {citizen.address.street}
            </Descriptions.Item>
            <Descriptions.Item label="Дом">
              {citizen.address.house}
            </Descriptions.Item>
            {citizen.address.apartment && (
              <Descriptions.Item label="Квартира">
                {citizen.address.apartment}
              </Descriptions.Item>
            )}
            {citizen.address.postalCode && (
              <Descriptions.Item label="Почтовый индекс">
                {citizen.address.postalCode}
              </Descriptions.Item>
            )}
          </Descriptions>
        </Card>
        <Card
          title={
            <span className="flex items-center gap-2">
              <Users size={18} className="text-blue-600" />
              Семья
            </span>
          }
        >
          {citizen.family.length > 0 ? (
            <div className="divide-y divide-slate-100">
              {citizen.family.map((item) => (
                <div key={item.id} className="py-3 first:pt-0 last:pb-0">
                  <p className="font-medium text-slate-800">{item.fullName}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    {item.relationship} · {formatDate(item.birthDate)}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500">Нет данных о членах семьи</p>
          )}
        </Card>
        <Card
          title={
            <span className="flex items-center gap-2">
              <GraduationCap size={18} className="text-blue-600" />
              Образование
            </span>
          }
        >
          {citizen.education.length > 0 ? (
            <div className="divide-y divide-slate-100">
              {citizen.education.map((item) => (
                <div
                  key={item.institution}
                  className="py-3 first:pt-0 last:pb-0"
                >
                  <p className="font-medium text-slate-800">
                    {item.institution}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {item.specialty} · {item.graduationYear}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-500">Нет данных о образовании</p>
          )}
        </Card>
        <Card
          title={
            <span className="flex items-center gap-2">
              <Briefcase size={18} className="text-blue-600" />
              Занятость
            </span>
          }
        >
          {citizen.employment.length > 0 ? (
            <div className="divide-y divide-slate-100">
              {citizen.employment.map((item) => (
                <div
                  key={item.organization}
                  className="py-3 first:pt-0 last:pb-0"
                >
                  <p className="font-medium text-slate-800">
                    {item.organization}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {item.position} · {item.startDate}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-500">Нет данных о работе</p>
          )}
        </Card>
      </div>
    </>
  );
};

export default CitizenDetails;
