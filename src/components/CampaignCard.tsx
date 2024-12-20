
import { Progress } from "./ui/progress";
import ButtonBlue from "./ui/buttonBlue";

// interface CampaignCardProps {
//     title: string;
//     description: string;
//     imageUrl: string;
// }

function CampaignCard() {
  const handleSeeDetails = () => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // create Group
    console.log(`see details`);
  };

  return (
    <div className="border border-gray-400 rounded-md p-3.5">
      <div className="bg-gray-300 h-[7em] rounded-md" />
      {/* <img src={imageUrl} alt={title} /> */}
      <p className="mt-1.5 text-lg text-gray-700">
        <b>Titulo del viaje</b>
      </p>
      {/* <p><b>{title}</b></p> */}
      <Progress value={33} goal={100} deadline={"10/10/20"} />
      <ButtonBlue
        text="Ver detalle"
        className="mt-3"
        onClick={handleSeeDetails}
      />
    </div>
  );
}

export default CampaignCard;
