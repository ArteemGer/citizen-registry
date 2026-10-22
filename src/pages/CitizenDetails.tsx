import { useParams } from "react-router";
import { citizensData } from "../data/citizens";

const CitizenDetails = () => {
  const { id } = useParams();

  const citizen = citizensData.find((citizen) => citizen.id === id);

  if (!citizen) {
    return <div>Гражданин не найден</div>;
  }

  return (
    <div>
      <h2>
        {citizen.lastName} {citizen.firstName} {citizen.middleName ?? ""}
      </h2>

      <p>Дата рождения: {citizen.birthDate}</p>
    </div>
  );
};

export default CitizenDetails;
