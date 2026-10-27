import { Input, Form, Card, Descriptions } from "antd";

import type { Citizen } from "../../types/citizen";
import { MapPin } from "lucide-react";

interface AddressCardProps {
  citizen: Citizen;
  isEditing: boolean;
}

const AddressCard = ({ citizen, isEditing }: AddressCardProps) => {
  return (
    <Card
      title={
        <span className="flex items-center gap-2">
          <MapPin size={18} className="text-blue-600" />
          Адрес
        </span>
      }
    >
      {isEditing ? (
        <>
          <Form.Item
            label="Регион"
            name={["address", "region"]}
            rules={[
              { required: true, message: "Введите регион" },
              { whitespace: true, message: "Поле не может быть пустым" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["address", "city"]}
            label="Город"
            rules={[
              { required: true, message: "Введите город" },
              { whitespace: true, message: "Поле не может быть пустым" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["address", "street"]}
            label="Улица"
            rules={[
              { required: true, message: "Введите улицу" },
              { whitespace: true, message: "Поле не может быть пустым" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["address", "house"]}
            label="Дом"
            rules={[
              { required: true, message: "Введите дом" },
              { whitespace: true, message: "Поле не может быть пустым" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={["address", "apartment"]} label="Квартира">
            <Input />
          </Form.Item>
          <Form.Item
            name={["address", "postalCode"]}
            label="Почтовый индекс"
            rules={[
              {
                pattern: /^\d{6}$/,
                message: "Индекс должен состоять из 6 цифр",
              },
            ]}
          >
            <Input maxLength={6} />
          </Form.Item>
        </>
      ) : (
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
      )}
    </Card>
  );
};

export default AddressCard;
