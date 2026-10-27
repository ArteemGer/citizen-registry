import type { Citizen } from "../types/citizen";

type MaritalStatus = NonNullable<Citizen["maritalStatus"]>;

const maritalStatusLabels: Record<
  MaritalStatus,
  Record<Citizen["gender"], string>
> = {
  single: { male: "Не женат", female: "Не замужем" },
  married: { male: "Женат", female: "Замужем" },
  divorced: { male: "Разведён", female: "Разведена" },
  widowed: { male: "Вдовец", female: "Вдова" },
};

export function getMaritalStatusLabel(
  status: Citizen["maritalStatus"],
  gender: Citizen["gender"],
): string {
  return status ? maritalStatusLabels[status][gender] : "Не указано";
}
