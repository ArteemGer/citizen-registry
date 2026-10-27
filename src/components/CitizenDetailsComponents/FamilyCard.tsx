import { Button, Card, DatePicker, Form, Input } from "antd";
import dayjs from "dayjs";
import { Plus, Trash2, Users } from "lucide-react";
import type { Citizen } from "../../types/citizen";

interface FamilyCardProps {
  citizen: Citizen;
  isEditing: boolean;
  formatDate: (date: string) => string;
}

const FamilyCard = ({ citizen, formatDate, isEditing }: FamilyCardProps) => {
  return (
    <Card
      title={
        <span className="flex items-center gap-2">
          <Users size={18} className="text-blue-600" />
          Семья
        </span>
      }
    >
      {isEditing ? (
        <Form.List name="family">
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
                    label="ФИО"
                    name={[name, "fullName"]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "Введите ФИО",
                      },
                    ]}
                  >
                    <Input placeholder="ФИО члена семьи" />
                  </Form.Item>

                  <Form.Item
                    label="Степень родства"
                    name={[name, "relationship"]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "Укажите степень родства",
                      },
                    ]}
                  >
                    <Input placeholder="Например, супруга" />
                  </Form.Item>

                  <Form.Item
                    label="Дата рождения"
                    name={[name, "birthDate"]}
                    rules={[
                      {
                        required: true,
                        message: "Укажите дату рождения",
                      },
                      {
                        validator: (_, value) =>
                          !value || !dayjs(value).isAfter(dayjs(), "day")
                            ? Promise.resolve()
                            : Promise.reject(
                                new Error(
                                  "Дата рождения не может быть в будущем",
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
                    Удалить члена семьи
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
                    fullName: "",
                    relationship: "",
                    birthDate: undefined,
                  })
                }
              >
                Добавить члена семьи
              </Button>
            </div>
          )}
        </Form.List>
      ) : citizen.family.length > 0 ? (
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
  );
};

export default FamilyCard;
