import Girls from "@/assets/images/Girls.svg";

const IconGroupComponent: React.FC = () => {
  return (
    <div className="flex justify-center">
      <img src={Girls} alt="Logo Bariló" className="w-60 md:w-72 lg:w-full" />
    </div>
  );
};

export default IconGroupComponent;
