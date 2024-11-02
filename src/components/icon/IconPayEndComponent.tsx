import PayEnd from "@/assets/images/plain-credit-card.svg";

const IconPayEndComponent: React.FC = () => {
  return (
    <div className="flex justify-center">
      <img src={PayEnd} alt="Logo Pay End" className="w-60 md:w-72 lg:w-80" />
    </div>
  );
};

export default IconPayEndComponent;
