import type { Citizen } from "../types/citizen";

export const citizensData: Citizen[] = [
  {
    id: "1",
    firstName: "Иван",
    lastName: "Иванов",
    middleName: "Иванович",
    birthDate: "1990-05-15",
    gender: "male",
    passport: {
      series: "1234",
      number: "567890",
      issuedAt: "2010-06-20",
      issuedBy: "Отделом УФМС России по Московской области",
    },
    address: {
      region: "Московская область",
      city: "Москва",
      street: "Ленина",
      house: "10",
      apartment: "25",
      postalCode: "101000",
    },
    family: [
      {
        id: "f1",
        fullName: "Ольга Иванова",
        relationship: "Жена",
        birthDate: "1995-05-15",
      },
      {
        id: "f2",
        fullName: "Марк Иванов",
        relationship: "Сын",
        birthDate: "2004-04-10",
      },
    ],
    education: [
      {
        institution: "Московский государственный университет",
        specialty: "Прикладная информатика",
        graduationYear: 2012,
      },
    ],
    employment: [
      {
        organization: "ООО «ТехноСервис»",
        position: "Системный аналитик",
        startDate: "2018-03-12",
      },
    ],
  },
  {
    id: "2",
    firstName: "Оля",
    lastName: "Иванова",
    middleName: "Ивановна",
    birthDate: "1995-05-15",
    gender: "female",
    passport: {
      series: "1111",
      number: "111111",
      issuedAt: "2015-07-10",
      issuedBy: "Отделом МВД России по г. Москве",
    },
    address: {
      region: "Московская область",
      city: "Москва",
      street: "Ленина",
      house: "11",
      apartment: "14",
      postalCode: "101001",
    },
    family: [
      {
        id: "f3",
        fullName: "Иван Иванов",
        relationship: "Муж",
        birthDate: "1990-05-15",
      },
    ],
    education: [
      {
        institution:
          "Российский экономический университет имени Г. В. Плеханова",
        specialty: "Экономика",
        graduationYear: 2017,
      },
    ],
    employment: [
      {
        organization: "АО «ФинансГрупп»",
        position: "Бухгалтер",
        startDate: "2019-09-02",
      },
    ],
  },
  {
    id: "3",
    firstName: "Олег",
    lastName: "Иванов",
    middleName: "",
    birthDate: "1992-06-16",
    gender: "male",
    passport: {
      series: "2222",
      number: "222222",
      issuedAt: "2012-08-14",
      issuedBy: "Отделом УФМС России по Московской области",
    },
    address: {
      region: "Московская область",
      city: "Москва",
      street: "Ленина",
      house: "13",
      apartment: "8",
      postalCode: "101002",
    },
    family: [],
    education: [
      {
        institution: "Московский технический университет связи и информатики",
        specialty: "Информационные системы и технологии",
        graduationYear: 2014,
      },
    ],
    employment: [
      {
        organization: "ООО «АйТи Решения»",
        position: "Frontend-разработчик",
        startDate: "2021-02-01",
      },
    ],
  },
  {
    id: "4",
    firstName: "Настя",
    lastName: "Иванова",
    middleName: "Ивановна",
    birthDate: "2000-03-25",
    gender: "female",
    passport: {
      series: "3333",
      number: "333333",
      issuedAt: "2020-04-17",
      issuedBy: "Отделом МВД России по г. Мытищи",
    },
    address: {
      region: "Московская область",
      city: "Мытищи",
      street: "Ленина",
      house: "4",
      apartment: "32",
      postalCode: "141008",
    },
    family: [
      {
        id: "f4",
        fullName: "Елена Иванова",
        relationship: "Мать",
        birthDate: "1975-11-03",
      },
    ],
    education: [
      {
        institution: "Московский государственный университет",
        specialty: "Психология",
        graduationYear: 2022,
      },
    ],
    employment: [
      {
        organization: "ООО «ПрофКонсалт»",
        position: "Специалист по работе с клиентами",
        startDate: "2023-01-16",
      },
    ],
  },
  {
    id: "5",
    firstName: "Марк",
    lastName: "Иванов",
    middleName: "Иванович",
    birthDate: "2004-04-10",
    gender: "male",
    passport: {
      series: "4444",
      number: "444444",
      issuedAt: "2024-05-22",
      issuedBy: "Отделом МВД России по г. Москве",
    },
    address: {
      region: "Московская область",
      city: "Москва",
      street: "Ленина",
      house: "10",
      apartment: "25",
      postalCode: "101000",
    },
    family: [
      {
        id: "f5",
        fullName: "Иван Иванов",
        relationship: "Отец",
        birthDate: "1990-05-15",
      },
      {
        id: "f6",
        fullName: "Ольга Иванова",
        relationship: "Мать",
        birthDate: "1995-05-15",
      },
    ],
    education: [
      {
        institution: "Московский политехнический университет",
        specialty: "Программная инженерия",
        graduationYear: 2026,
      },
    ],
    employment: [
      {
        organization: "ООО «Диджитал Старт»",
        position: "Стажёр-разработчик",
        startDate: "2025-06-02",
      },
    ],
  },
  {
    id: "6",
    firstName: "Алёна",
    lastName: "Иванова",
    middleName: "Ивановна",
    birthDate: "1985-12-15",
    gender: "female",
    passport: {
      series: "5555",
      number: "555555",
      issuedAt: "2005-12-28",
      issuedBy: "Отделом УФМС России по Московской области",
    },
    address: {
      region: "Московская область",
      city: "Москва",
      street: "Ленина",
      house: "10",
      apartment: "41",
      postalCode: "101000",
    },
    family: [
      {
        id: "f7",
        fullName: "Сергей Петров",
        relationship: "Муж",
        birthDate: "1983-08-21",
      },
      {
        id: "f8",
        fullName: "Анна Петрова",
        relationship: "Дочь",
        birthDate: "2012-02-14",
      },
    ],
    education: [
      {
        institution: "Московский педагогический государственный университет",
        specialty: "Педагогика и психология",
        graduationYear: 2007,
      },
    ],
    employment: [
      {
        organization: "Средняя общеобразовательная школа № 125",
        position: "Педагог-психолог",
        startDate: "2016-08-25",
      },
    ],
  },
  {
    id: "7",
    firstName: "Дмитрий",
    lastName: "Смирнов",
    middleName: "Алексеевич",
    birthDate: "1988-09-07",
    gender: "male",
    passport: {
      series: "6666",
      number: "666666",
      issuedAt: "2008-10-16",
      issuedBy: "Отделом УФМС России по г. Твери",
    },
    address: {
      region: "Тверская область",
      city: "Тверь",
      street: "Советская",
      house: "18",
      apartment: "12",
      postalCode: "170100",
    },
    family: [
      {
        id: "f9",
        fullName: "Мария Смирнова",
        relationship: "Жена",
        birthDate: "1990-01-19",
      },
    ],
    education: [
      {
        institution: "Тверской государственный технический университет",
        specialty: "Информационные технологии",
        graduationYear: 2010,
      },
    ],
    employment: [
      {
        organization: "ООО «Вектор»",
        position: "Инженер-программист",
        startDate: "2017-04-03",
      },
    ],
  },
  {
    id: "8",
    firstName: "Екатерина",
    lastName: "Соколова",
    middleName: "Андреевна",
    birthDate: "1998-11-22",
    gender: "female",
    passport: {
      series: "7777",
      number: "777777",
      issuedAt: "2018-12-05",
      issuedBy: "Отделом МВД России по г. Королёву",
    },
    address: {
      region: "Московская область",
      city: "Королёв",
      street: "Космонавтов",
      house: "7",
      apartment: "56",
      postalCode: "141070",
    },
    family: [],
    education: [
      {
        institution:
          "Национальный исследовательский университет «Высшая школа экономики»",
        specialty: "Менеджмент",
        graduationYear: 2020,
      },
    ],
    employment: [
      {
        organization: "ООО «Городские сервисы»",
        position: "Менеджер проектов",
        startDate: "2021-07-12",
      },
    ],
  },
];
