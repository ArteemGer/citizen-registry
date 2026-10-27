import { Input, Form, Card, DatePicker, Descriptions } from "antd";
import dayjs from "dayjs";
import { IdCardLanyard } from "lucide-react";
import type { Citizen } from "../../types/citizen";

interface PassportCardProps {
  citizen: Citizen;
  formatDate: (date: string) => string;
  isEditing: boolean;
}

const PassportCard = ({
  citizen,
  formatDate,
  isEditing,
}: PassportCardProps) => {
  return (
    <Card
      title={
        <span className="flex items-center gap-2">
          <IdCardLanyard size={18} className="text-blue-600" />
          Паспорт
        </span>
      }
    >
      {isEditing ? (
        <>
          <Form.Item
            name={["passport", "series"]}
            label="Серия"
            rules={[
              { required: true, message: "Введите серию паспорта" },
              {
                pattern: /^\d{4}$/,
                message: "Серия должна содержать 4 цифры",
              },
            ]}
          >
            <Input maxLength={4} />
          </Form.Item>

          <Form.Item
            name={["passport", "number"]}
            label="Номер"
            rules={[
              { required: true, message: "Введите номер паспорта" },
              {
                pattern: /^\d{6}$/,
                message: "Номер должен содержать 6 цифр",
              },
            ]}
          >
            <Input maxLength={6} />
          </Form.Item>

          <Form.Item
            name={["passport", "issuedBy"]}
            label="Кем выдан"
            rules={[
              { required: true, message: "Укажите, кем выдан паспорт" },
              { whitespace: true, message: "Поле не может быть пустым" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["passport", "issuedAt"]}
            label="Дата выдачи"
            rules={[
              { required: true, message: "Укажите дату выдачи паспорта" },
              {
                validator: (_, value) => {
                  if (!value || !value.isAfter(dayjs(), "day")) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error("Дата выдачи не может быть в будущем"),
                  );
                },
              },
            ]}
          >
            <DatePicker
              className="w-full"
              format="DD.MM.YYYY"
              disabledDate={(current) => current.isAfter(dayjs(), "day")}
            />
          </Form.Item>
        </>
      ) : (
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
      )}
    </Card>
  );
};

export default PassportCard;
