import { useNavigate } from "react-router-dom";
import ButtonBlue from "../ui/buttonBlue";

function GroupCard() {
  const navigate = useNavigate();

  const handleSeeGroupDetails =
    () => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      console.log(`boton cliqueado`);
      navigate("/dashboard/group");
    };

  return (
    <div className="border border-gray-400 rounded-md p-3.5">
      <div className="bg-gray-300 h-[7em] rounded-md" />
      {/* <img src={imageUrl} alt={title} /> */}
      <p className="mt-1.5 text-lg text-gray-700">
        <b>Titulo del viaje</b>
      </p>
      {/* <p>{title}</p> */}
      <p className="text-sm text-gray-500">Viaje a Mar del Plata grupo "NNN"</p>
      {/* <p>{description}</p> */}
      <ButtonBlue
        text="Ver detalle del grupo"
        className="mt-3"
        onClick={handleSeeGroupDetails}
      />
    </div>
  );
}

export default GroupCard;
