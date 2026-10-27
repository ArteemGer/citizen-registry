import { useNavigate, useParams } from "react-router";
import { Button, Form } from "antd";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useCitizensStore } from "../store/citizensStore";
import dayjs from "dayjs";
import type { CitizenFormValues } from "../types/citizen";
import CitizenHeader from "../components/CitizenDetailsComponents/CitizenHeader";
import BasicInfoCard from "../components/CitizenDetailsComponents/BasicInfoCard";
import PassportCard from "../components/CitizenDetailsComponents/PassportCard";
import AddressCard from "../components/CitizenDetailsComponents/AddressCard";
import FamilyCard from "../components/CitizenDetailsComponents/FamilyCard";
import EducationCard from "../components/CitizenDetailsComponents/EducationCard";
import EmploymentCard from "../components/CitizenDetailsComponents/EmploymentCard";

const CitizenDetails = () => {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const citizens = useCitizensStore((state) => state.citizens);
  const updateCitizen = useCitizensStore((state) => state.updateCitizen);

  const citizen = citizens.find((citizen) => citizen.id === id);

  if (!citizen) {
    return <div>Гражданин не найден</div>;
  }

  const formatDate = (date: string) =>
    new Date(`${date}T00:00:00`).toLocaleDateString("ru-RU");

  const handleEdit = () => {
    form.setFieldsValue({
      ...citizen,
      birthDate: dayjs(citizen.birthDate),
      passport: {
        ...citizen.passport,
        issuedAt: dayjs(citizen.passport.issuedAt),
      },
      address: {
        ...citizen.address,
      },
      family: citizen.family.map((item) => ({
        ...item,
        birthDate: item.birthDate ? dayjs(item.birthDate) : null,
      })),
      education: citizen.education,
      employment: citizen.employment.map((item) => ({
        ...item,
        startDate: item.startDate ? dayjs(item.startDate) : null,
      })),
    });

    setIsEditing(true);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsEditing(false);
  };

  const handleSave = (values: CitizenFormValues) => {
    updateCitizen({
      ...citizen,
      ...values,
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      middleName: values.middleName?.trim() || null,
      birthDate: values.birthDate.format("YYYY-MM-DD"),
      citizenship: values.citizenship?.trim() || null,
      maritalStatus: values.maritalStatus ?? null,
      phone: values.phone?.trim() || null,
      email: values.email?.trim() || null,
      passport: {
        ...citizen.passport,
        ...values.passport,
        issuedAt: values.passport.issuedAt.format("YYYY-MM-DD"),
      },
      address: {
        ...citizen.address,
        ...values.address,
      },
      family: values.family.map((item) => ({
        ...item,
        birthDate: item.birthDate.format("YYYY-MM-DD"),
      })),
      employment: values.employment.map((item) => ({
        ...item,
        startDate: item.startDate.format("YYYY-MM-DD"),
      })),
    });

    setIsEditing(false);
  };

  return (
    <>
      <Button
        icon={<ArrowLeft size={16} />}
        onClick={() => navigate(-1)}
        className="mb-2"
      >
        К реестру
      </Button>

      <CitizenHeader
        citizen={citizen}
        formatDate={formatDate}
        isEditing={isEditing}
        handleCancel={handleCancel}
        handleEdit={handleEdit}
        form={form}
      />

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSave}
        initialValues={{
          firstName: citizen.firstName,
          lastName: citizen.lastName,
          middleName: citizen.middleName,
          birthDate: dayjs(citizen.birthDate),
          gender: citizen.gender,
          citizenship: citizen.citizenship,
          maritalStatus: citizen.maritalStatus,
          phone: citizen.phone,
          email: citizen.email,
          passport: {
            series: citizen.passport.series,
            number: citizen.passport.number,
            issuedBy: citizen.passport.issuedBy,
            issuedAt: dayjs(citizen.passport.issuedAt),
          },
          address: {
            ...citizen.address,
          },
        }}
      >
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <BasicInfoCard
            citizen={citizen}
            isEditing={isEditing}
            formatDate={formatDate}
          />
          <PassportCard
            citizen={citizen}
            isEditing={isEditing}
            formatDate={formatDate}
          />
          <AddressCard citizen={citizen} isEditing={isEditing} />

          <FamilyCard
            citizen={citizen}
            isEditing={isEditing}
            formatDate={formatDate}
          />

          <EducationCard citizen={citizen} isEditing={isEditing} />

          <EmploymentCard
            citizen={citizen}
            isEditing={isEditing}
            formatDate={formatDate}
          />
        </div>
      </Form>
    </>
  );
};

export default CitizenDetails;
