import { Input, Table } from "antd";
import { citizensData } from "../data/citizens";
import type { Citizen } from "../types/citizen";
import type { TableColumnsType } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";

const { Search } = Input;

const CitizensPage = () => {
  const navigate = useNavigate();
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
      dataIndex: ["passport.series", "passport.number"],
      key: "passport",
      render: (_, record) =>
        `${record.passport.series} ${record.passport.number}`,
    },
  ];

  const [searchText, setSearchText] = useState("");

  const filteredCitizens = citizensData.filter((citizen) => {
    const query = searchText.trim().toLowerCase();

    const fullName =
      `${citizen.lastName} ${citizen.firstName} ${citizen.middleName ?? ""}`
        .trim()
        .toLowerCase();

    const city = citizen.address.city.trim().toLowerCase();

    if (!query) {
      return citizensData;
    }

    return fullName.includes(query) || city.includes(query);
  });

  return (
    <div style={{ width: "100%" }}>
      <Search
        placeholder="Поиск по ФИО"
        allowClear
        style={{ width: "100%", margin: "10px 0" }}
        size="large"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      ></Search>
      <Table
        rowHoverable
        rowClassName={() => "cursor-pointer"}
        onRow={(record) => ({
          onClick: () => navigate(`/citizens/${record.id}`),
        })}
        rowKey="id"
        columns={columns}
        dataSource={filteredCitizens}
      />
    </div>
  );
};

export default CitizensPage;
