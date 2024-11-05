import { useLocation } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { IoAlarmOutline } from "react-icons/io5";
import IconPayEndComponent from "../icon/IconPayEndComponent";
import ButtonBlue from "../ui/buttonBlue";
import { useTranslation } from "react-i18next";

function PaymentEndComponent() {
  const location = useLocation();
  const { stepOneData = null, stepFourData = null } = location.state || {};
  const { t } = useTranslation();
  
  return (
    <div className="justify-center w-full h-[60em] pb-20 -mb-20 bg-secondary-celeste">
      <div className="py-10">
        <IconPayEndComponent />
      </div>
      <h1 className="text-4xl font-semibold text-center text-white font-primary">
        Felicitaciones
      </h1>
      <h2 className="text-lg text-center text-white font-primary">
        El pago fue exitoso
      </h2>
      <div className="flex flex-col items-center justify-center p-4 mx-auto my-8 border-white shadow-md border-1 rounded-3xl w-72 sm:w-[30em] lg:w-[60em]">
        <h3 className="text-base font-light text-center text-white md:text-lg">
          Has reservado con éxito
        </h3>
        <p className="text-3xl font-extrabold text-center text-white text-secondary-celeste font-primary">
          {stepFourData.activities && stepFourData.activities.length > 0 && (
            <span>
              Actividades:{" "}
              {stepFourData.activities.map((act) => act.name).join(", ")}
            </span>
          )}
        </p>
        <p className="text-3xl font-extrabold text-center text-white text-secondary-celeste font-primary">
          {stepFourData.restaurants && stepFourData.restaurants.length > 0 && (
            <span>
              Restaurantes:{" "}
              {stepFourData.restaurants.map((rest) => rest.name).join(", ")}
            </span>
          )}
        </p>
        <p className="text-base font-light text-center text-white">
          {stepOneData &&
            `para el grupo ${
              stepOneData.groupName.charAt(0).toUpperCase() +
              stepOneData.groupName.slice(1).toLowerCase()
            }`}
        </p>
        <div className="flex items-center justify-center pt-2 flex-col-2 gap-x-4">
          <div className="flex text-base text-center text-white lg:text-xl">
            <FaCalendarAlt />
            <p className="pl-1 text-sm font-light md:text-base lg:text-xl">
              lun 24-11-24
            </p>
            {/* Aquí se debe reemplazar con la fecha real si existiese*/}
          </div>
          <div className="flex text-xl text-center text-white lg:text-2xl">
            <IoAlarmOutline />
            <p className="pl-1 text-sm font-light md:text-base lg:text-xl">
              10:00 a.m.
            </p>
            {/* Aquí se debe reemplazar con la hora real si existiese*/}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-4 mx-auto w-[18em]">
        <ButtonBlue
          className="font-medium shadow-md border-primary-celeste hover:bg-primary-celeste hover:text-white"
          text={t("buttons.payment.buttonCalendar")}
          isActive={false}
        />
      </div>
    </div>
  );
}

export default PaymentEndComponent;
