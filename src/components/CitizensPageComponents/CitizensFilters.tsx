import { Button, DatePicker, Input, Select, Space } from "antd";
import { RotateCcw } from "lucide-react";
import dayjs from "dayjs";
import type { Citizen } from "../../types/citizen";

const { Search } = Input;
const { RangePicker } = DatePicker;

interface CitizensFiltersProps {
  searchInput: string;
  gender?: Citizen["gender"];
  city?: string;
  dateFrom: string;
  dateTo: string;
  cityOptions: { label: string; value: string }[];
  filteredCount: number;
  totalCount: number;
  onSearchChange: (value: string) => void;
  onGenderChange: (value: Citizen["gender"] | undefined) => void;
  onCityChange: (value: string | undefined) => void;
  onBirthRangeChange: (from: string | undefined, to: string | undefined) => void;
  onReset: () => void;
}

const CitizensFilters = ({
  searchInput, gender, city, dateFrom, dateTo, cityOptions,
  filteredCount, totalCount, onSearchChange, onGenderChange,
  onCityChange, onBirthRangeChange, onReset,
}: CitizensFiltersProps) => {
  return (
    <div className="mb-5 rounded-xl border border-gray-200 bg-white p-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <Search
          placeholder="Поиск по ФИО или городу"
          allowClear
          value={searchInput}
          onChange={(e) => onSearchChange(e.target.value)}
        />

        <Select
          placeholder="Пол"
          allowClear
          value={gender}
          options={[
            { label: "Мужской", value: "male" },
            { label: "Женский", value: "female" },
          ]}
          onChange={(value) => onGenderChange(value)}
        />

        <Select
          placeholder="Город"
          allowClear
          showSearch={{
            optionFilterProp: "label",
          }}
          options={cityOptions}
          value={city}
          onChange={(value) => onCityChange(value)}
        />

        <RangePicker
          format="DD.MM.YYYY"
          allowClear
          value={
            dateFrom || dateTo
              ? [
                  dateFrom ? dayjs(dateFrom) : null,
                  dateTo ? dayjs(dateTo) : null,
                ]
              : null
          }
          onChange={(dates) =>
            onBirthRangeChange(
              dates?.[0]?.format("YYYY-MM-DD"),
              dates?.[1]?.format("YYYY-MM-DD"),
            )
          }
        />
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500">
          Найдено{" "}
          <span className="font-semibold text-gray-800">
            {filteredCount}{" "}
          </span>
          из{" "}
          <span className="font-semibold text-gray-800">
            {totalCount}
          </span>
        </span>

        <Space>
          <Button icon={<RotateCcw size={16} />} onClick={onReset}>
            Сбросить фильтры
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default CitizensFilters;
