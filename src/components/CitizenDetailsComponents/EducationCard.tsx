import { Button, Card, Form, Input, InputNumber } from "antd";
import { GraduationCap, Plus, Trash2 } from "lucide-react";
import type { Citizen } from "../../types/citizen";

interface EducationCardProps {
  citizen: Citizen;
  isEditing: boolean;
}

const EducationCard = ({ citizen, isEditing }: EducationCardProps) => {
  return (
    <Card
      title={
        <span className="flex items-center gap-2">
          <GraduationCap size={18} className="text-blue-600" />
          Образование
        </span>
      }
    >
      {isEditing ? (
        <Form.List name="education">
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
                    label="Учебное заведение"
                    name={[name, "institution"]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "Введите учебное заведение",
                      },
                    ]}
                  >
                    <Input placeholder="Название учебного заведения" />
                  </Form.Item>

                  <Form.Item
                    label="Специальность"
                    name={[name, "specialty"]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "Введите специальность",
                      },
                    ]}
                  >
                    <Input placeholder="Специальность" />
                  </Form.Item>

                  <Form.Item
                    label="Год окончания"
                    name={[name, "graduationYear"]}
                    rules={[
                      {
                        required: true,
                        message: "Укажите год окончания",
                      },
                      {
                        type: "number",
                        min: 1900,
                        max: new Date().getFullYear() + 10,
                        message: "Укажите корректный год",
                      },
                    ]}
                  >
                    <InputNumber className="w-full" precision={0} />
                  </Form.Item>

                  <Button
                    danger
                    icon={<Trash2 size={14} />}
                    onClick={() => remove(name)}
                  >
                    Удалить образование
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
                    institution: "",
                    specialty: "",
                    graduationYear: undefined,
                  })
                }
              >
                Добавить образование
              </Button>
            </div>
          )}
        </Form.List>
      ) : citizen.education.length > 0 ? (
        <div className="divide-y divide-slate-100">
          {citizen.education.map((item) => (
            <div key={item.id} className="py-3 first:pt-0 last:pb-0">
              <p className="font-medium text-slate-800">{item.institution}</p>
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
  );
};

export default EducationCard;
