import { Card, Input, DatePicker, Button, Form } from "antd";
import dayjs from "dayjs";
import { Briefcase, Trash2, Plus } from "lucide-react";
import type { Citizen } from "../../types/citizen";

interface EmploymentCardProps {
  citizen: Citizen;
  formatDate: (date: string) => string;
  isEditing: boolean;
}

const EmploymentCard = ({
  citizen,
  formatDate,
  isEditing,
}: EmploymentCardProps) => {
  return (
    <Card
      title={
        <span className="flex items-center gap-2">
          <Briefcase size={18} className="text-blue-600" />
          Занятость
        </span>
      }
    >
      {isEditing ? (
        <Form.List name="employment">
          {(fields, { add, remove }) => (
            <div className="flex flex-col gap-4">
              {fields.map(({ key, name }) => (
                <div
                  key={key}
                  className="rounded-xl border border-gray-200 p-4"
                >
                  <Form.Item name={[name, "id"]} hidden>
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Организация"
                    name={[name, "organization"]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "Введите название организации",
                      },
                    ]}
                  >
                    <Input placeholder="Название организации" />
                  </Form.Item>

                  <Form.Item
                    label="Должность"
                    name={[name, "position"]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "Введите должность",
                      },
                    ]}
                  >
                    <Input placeholder="Должность" />
                  </Form.Item>

                  <Form.Item
                    label="Дата начала работы"
                    name={[name, "startDate"]}
                    rules={[
                      {
                        required: true,
                        message: "Укажите дату начала работы",
                      },
                      {
                        validator: (_, value) =>
                          !value || !dayjs(value).isAfter(dayjs(), "day")
                            ? Promise.resolve()
                            : Promise.reject(
                                new Error(
                                  "Дата начала работы не может быть в будущем",
                                ),
                              ),
                      },
                    ]}
                  >
                    <DatePicker
                      className="w-full"
                      format="DD.MM.YYYY"
                      disabledDate={(date) => date.isAfter(dayjs(), "day")}
                    />
                  </Form.Item>

                  <Button
                    danger
                    icon={<Trash2 size={14} />}
                    onClick={() => remove(name)}
                  >
                    Удалить место работы
                  </Button>
                </div>
              ))}

              <Button
                type="dashed"
                block
                icon={<Plus size={16} />}
                onClick={() =>
                  add({
                    id: crypto.randomUUID(),
                    organization: "",
                    position: "",
                    startDate: undefined,
                  })
                }
              >
                Добавить место работы
              </Button>
            </div>
          )}
        </Form.List>
      ) : citizen.employment.length > 0 ? (
        <div className="divide-y divide-slate-100">
          {citizen.employment.map((item) => (
            <div key={item.id} className="py-3 first:pt-0 last:pb-0">
              <p className="font-medium text-slate-800">{item.organization}</p>
              <p className="mt-1 text-sm text-slate-500">
                {item.position} · {formatDate(item.startDate)}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-slate-500">Нет данных о работе</p>
      )}
    </Card>
  );
};

export default EmploymentCard;
