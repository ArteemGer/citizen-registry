import { Card, DatePicker, Descriptions, Form, Input, Select } from "antd";
import dayjs from "dayjs";
import { UserRound } from "lucide-react";
import type { Citizen } from "../../types/citizen";
import { getMaritalStatusLabel } from "../../utils/citizenLabels";

interface BasicInfoCardProps {
  citizen: Citizen;
  formatDate: (date: string) => string;
  isEditing: boolean;
}

const BasicInfoCard = ({
  citizen,
  formatDate,
  isEditing,
}: BasicInfoCardProps) => {
  return (
    <Card
      title={
        <span className="flex items-center gap-2">
          <UserRound size={18} className="text-blue-600" />
          Основная информация
        </span>
      }
    >
      {isEditing ? (
        <>
          <Form.Item
            name="firstName"
            label="Имя"
            required
            rules={[
              { required: true, message: "Введите имя" },
              { whitespace: true, message: "Поле не может быть пустым" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Фамилия"
            required
            rules={[
              { required: true, message: "Введите фамилию" },
              { whitespace: true, message: "Поле не может быть пустым" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="middleName" label="Отчество">
            <Input />
          </Form.Item>
          <Form.Item
            name="birthDate"
            label="Дата рождения"
            required
            rules={[
              { required: true, message: "Введите дату рождения" },
              {
                validator: (_, value) => {
                  if (!value || !value.isAfter(dayjs(), "day")) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error("Дата рождения не может быть в будущем"),
                  );
                },
              },
            ]}
          >
            <DatePicker
              className="w-full"
              disabledDate={(current) => current.isAfter(dayjs(), "day")}
              format="DD.MM.YYYY"
            />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Пол"
            rules={[{ required: true, message: "Выберите пол" }]}
          >
            <Select
              options={[
                { value: "male", label: "Мужской" },
                { value: "female", label: "Женский" },
              ]}
            />
          </Form.Item>
          <Form.Item name="citizenship" label="Гражданство">
            <Input />
          </Form.Item>
          <Form.Item name="maritalStatus" label="Семейное положение">
            <Select
              allowClear
              options={[
                { value: "single", label: "Не состоит в браке" },
                { value: "married", label: "Состоит в браке" },
                { value: "divorced", label: "В разводе" },
                { value: "widowed", label: "Вдовец / вдова" },
              ]}
            />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Телефон"
            rules={[
              {
                validator: (_, value?: string) => {
                  if (!value?.trim()) {
                    return Promise.resolve();
                  }

                  const digits = value.replace(/\D/g, "");
                  const hasAllowedCharacters = /^\+?[\d\s()-]+$/.test(
                    value.trim(),
                  );
                  const hasValidNumber = /^[78]\d{10}$/.test(digits);

                  return hasAllowedCharacters && hasValidNumber
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error(
                          "Введите номер из 11 цифр, начиная с +7 или 8",
                        ),
                      );
                },
              },
            ]}
          >
            <Input type="tel" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Электронная почта"
            rules={[
              {
                type: "email",
                message: "Введите корректный email",
              },
            ]}
          >
            <Input type="email" />
          </Form.Item>
        </>
      ) : (
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
          <Descriptions.Item label="Гражданство">
            {citizen.citizenship ?? "Не указано"}
          </Descriptions.Item>
          <Descriptions.Item label="Семейное положение">
            {getMaritalStatusLabel(citizen.maritalStatus, citizen.gender)}
          </Descriptions.Item>
          <Descriptions.Item label="Номер телефона">
            {citizen.phone ?? "Не указано"}
          </Descriptions.Item>
          <Descriptions.Item label="Электронная почта">
            {citizen.email ?? "Не указано"}
          </Descriptions.Item>
        </Descriptions>
      )}
    </Card>
  );
};

export default BasicInfoCard;
