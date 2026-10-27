import { Table, type TableColumnsType } from "antd";
import type { Citizen } from "../../types/citizen";

const columns: TableColumnsType<Citizen> = [
  {
    title: "ФИО",
    dataIndex: ["lastName", "firstName", "middleName"],
    key: "fio",
    render: (_, record) =>
      `${record.lastName} ${record.firstName} ${record.middleName ?? ""}`.trim(),
  },
  {
    title: "Дата рождения",
    dataIndex: "birthDate",
    key: "birthDate",
    render: (_, record) => new Date(record.birthDate).toLocaleDateString(),
    sorter: (a, b) =>
      new Date(a.birthDate).getTime() - new Date(b.birthDate).getTime(),
  },
  {
    title: "Пол",
    dataIndex: "gender",
    key: "gender",
    render: (_, record) => (record.gender === "male" ? "Мужской" : "Женский"),
  },
  {
    title: "Город",
    dataIndex: ["address", "city"],
    key: "city",
  },
  {
    title: "Паспорт",
    key: "passport",
    render: (_, record) =>
      `${record.passport.series} ${record.passport.number}`,
  },
];

interface CitizensTableProps {
  citizens: Citizen[];
  currentPage: number;
  pageSize: number;
  onPageChange: (page: number, pageSize: number) => void;
  onOpenCitizen: (id: string) => void;
}

const CitizensTable = ({
  citizens, currentPage, pageSize, onPageChange, onOpenCitizen,
}: CitizensTableProps) => {
  return (
    <Table
      rowHoverable
      rowClassName={() => "cursor-pointer"}
      onRow={(record) => ({
        onClick: () => onOpenCitizen(record.id),
      })}
      rowKey="id"
      columns={columns}
      dataSource={citizens}
      pagination={{
        current: currentPage,
        pageSize,
        showSizeChanger: true,
        pageSizeOptions: [10, 20, 50, 100],
        showTotal: (total, range) =>
          `${range[0]}–${range[1]} из ${total} граждан`,
        onChange: onPageChange,
      }}
    />
  );
};

export default CitizensTable;
