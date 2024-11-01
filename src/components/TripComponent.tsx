import { useTranslation } from "react-i18next";
import BotonBlue from "@/components/ui/buttonBlue";
import { useNavigate } from "react-router-dom";
import IconGroupComponent from "./icon/IconGroupComponent";

const TripComponent: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center mt-8 mb-6 overflow-hidden text-justify text-secondary-celeste font-primary">
      <div className="container flex flex-col items-center px-5 pb-12 mx-auto">
        <div className="w-full">
          <h1 className="text-4xl tracking-tight text-center lg:text-5xl">
            {t("createTrip.title")}
          </h1>
          <div className="text-xl md:text-2xl lg:text-3xl">
            <p className="mt-4 leading-tight">{t("createTrip.text1")}</p>
            <p className="mt-4 leading-tight">{t("createTrip.text2")}</p>
            <p className="mt-4 leading-tight">{t("createTrip.text3")}</p>
          </div>
        </div>
        <div className="flex flex-col w-full mt-10 bg-opacity-50 rounded-md">
          <div className="relative mb-4">
            <div className="flex flex-col items-center md:flex-row gap-x-4 gap-y-4">
              <BotonBlue
                text={t("buttons.createTrip.groupButton")}
                isActive={true}
                onClick={() => navigate("/create-trip")}
              />
              <BotonBlue
                text={t("buttons.createTrip.joinButton")}
                isActive={true}
                onClick={() => navigate("/access-group")}
              />
              <BotonBlue
                text={t("buttons.backButton")}
                isActive={false}
                onClick={() => navigate("/home")}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mb-5">
          <IconGroupComponent />
        </div>
      </div>
    </section>
  );
};

export default TripComponent;
