import CampaignCard from "@/components/CampaignCard";
import GroupCard from "@/components/group/GroupCard";
import ButtonBlue from "@/components/ui/buttonBlue";

function PlanTrip() {
  const handleCreateCampaign =
    () => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      // create campaign
      console.log(`Create campaign`);
    };
  const handleCreateGroup = () => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // create Group
    console.log(`Create campaign`);
  };

  return (
    <div className="flex-col mx-3 mt-3">
      <section>
        <ButtonBlue
          text="Crear campaña"
          className="mt-3"
          onClick={handleCreateCampaign}
        />
        <ButtonBlue
          text="Crear grupo de viaje"
          className="mt-1"
          onClick={handleCreateGroup}
        />
      </section>
      <section className="mt-3">
        <h1 className="mb-3 text-lg font-black text-gray-700">
          {" "}
          Mis campañas creadas
        </h1>
        <CampaignCard />
        <h1 className="mt-3 mb-3 text-lg font-black text-gray-700">
          {" "}
          Mis grupos de egresados
        </h1>
        <GroupCard />
      </section>
    </div>
  );
}

export default PlanTrip;
