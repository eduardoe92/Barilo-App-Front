import Pay from "@/assets/images/pay.svg";

const IconPayComponent: React.FC = () => {
  return (
    <div className="flex justify-center">
      <img src={Pay} alt="Logo Pay" className="w-60 md:w-72 lg:w-80" />
    </div>
  );
};

export default IconPayComponent;
