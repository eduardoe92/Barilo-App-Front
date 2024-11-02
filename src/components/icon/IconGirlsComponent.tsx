import Girls from "@/assets/images/Girls.svg";

const IconGroupComponent: React.FC = () => {
  return (
    <div className="flex justify-center">
      <img src={Girls} alt="Logo Girls" className="w-60 md:w-72 lg:w-80" />
    </div>
  );
};

export default IconGroupComponent;
