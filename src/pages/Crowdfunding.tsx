import CrowdComponent from "@/components/crowdfunding/CrowdComponent";
import amico from "@/assets/images/amico.svg"
import coins from "@/assets/images/coins.svg"

function Crowdfunding() {
  return (
    <>
      <CrowdComponent
        profile="organizer"
        image={amico}
      />
    </>
  );
}

export const CrowdfundingDonor = () => {
  return (
    <>
      <CrowdComponent profile="donor" image="src\assets\images\pana.svg" />
      <CrowdComponent
        profile="approvedDonation"
        image={coins}
      />
    </>
  );
};

export default Crowdfunding;
