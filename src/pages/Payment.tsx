import PaymentCard from "@/components/payment/PaymentCard";
import { useTranslation } from "react-i18next";
import { useUserProfile } from "@/hooks/useUserProfile";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthProvider";
import ButtonBlue from "@/components/ui/buttonBlue";
import { AiOutlineDollar } from "react-icons/ai";
import NoPendingPaymentsMessage from "@/components/payment/NoPendingPaymentsMessage";
import { handlePayment } from "@/services/paymentService";

function Payment() {
  const { t } = useTranslation();
  const location = useLocation();
  const { token } = useAuth();
  console.log(location.state);
  const {
    stepOneData = null,
    stepTwoData = null,
    stepThreeData = null,
    stepFourData = null,
    method = null,
  } = location.state || {};

  const navigate = useNavigate();

  const activity = {
    name: t("views_payment.activity.name"),
    info: t("views_payment.activity.info"),
    price: t("views_payment.activity.price"),
    destinationName: t("views_payment.activity.destination_name"),
    date: t("views_payment.activity.date"),
    duration: t("views_payment.activity.duration"),
  };
  const { profile } = useUserProfile();

  let price: number;
  if (
    stepFourData != null &&
    stepOneData != null &&
    stepTwoData != null &&
    stepThreeData != null
  ) {
    price =
      stepFourData.activities[0].price +
      stepFourData.restaurants[0].price +
      stepTwoData.selectedOutbound.price;
  }

  const paymentData = {
    amount: price,
    paymentType: "Tarjeta",
    date: new Date(Date.now()).toISOString(),
    userId: profile?.id ?? 0,
  };

  const handleChangeMethod = async () => {
    navigate("/payment-method", {
      state: { stepOneData, stepTwoData, stepThreeData, stepFourData },
    });
  };

  const handlePaymentClick = async () => {
    try {
      await handlePayment(token, paymentData);
      navigate("/payment-end");
    } catch (error) {
      console.error("Error al procesar el pago:", error);
    }
  };

  return (
    <div className="flex items-center justify-center pb-16 pr-1 sm:pr-0">
      <div className="border-4 border-solid border-secondary-celeste md:mx-20 xl:mx-80 rounded-xl">
        {stepOneData != null ? (
          <div>
            <div className="flex flex-col items-center justify-between w-full h-30 bg-secondary-celeste rounded-b-2xl">
              <h2 className="text-2xl py-2 text-[--active-button-text] font-primary">
                {t("views_payment.h2_pay")}
              </h2>
              <h1 className="flex py-2 text-4xl text-[--active-button-text] font-primary font-bold justify-center">
                <AiOutlineDollar />
                {paymentData.amount}
              </h1>
            </div>
            <div>
              <PaymentCard
                name={stepFourData.restaurants[0].name}
                info={"Restaurante cinco estrellas"}
                img={stepFourData.restaurants[0].image}
              ></PaymentCard>
            </div>
            <div>
              <PaymentCard
                name={stepFourData.activities[0].name}
                info={stepFourData.activities[0].description}
                img={stepFourData.activities[0].image}
              ></PaymentCard>
            </div>
            <div className="">
              <div className="flex flex-col px-4">
                <hr className="bg-[--secondary-celeste] h-px border-none mb-2" />
                {/*
              <div className="flex items-center justify-between px-4 py-2">
                <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">{t('views_payment.keyInfo.date')}</h1>
                <p className="text-xs font-[--font-primary]">{activity.date}</p>
              </div>
              <div className="flex items-center justify-between px-4 py-2">
                <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">{t('views_payment.keyInfo.duration')}</h1>
                <p className="text-xs font-[--font-primary]">{activity.duration}</p>
              </div>
            */}
                <div className="flex items-center justify-between px-4 py-2">
                  <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">
                    {t("views_payment.keyInfo.reservation.key")}
                  </h1>
                  <p className="text-xs font-[--font-primary]">
                    {stepOneData.groupName}
                  </p>
                </div>
                {/*
              <div className="flex items-center justify-between px-4 py-2">
              <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">{t('views_payment.keyInfo.duration')}</h1>
              <p className="text-xs font-[--font-primary]">{activity.duration}</p>
              </div>
              */}
                <hr className="bg-[--secondary-celeste] h-px border-none my-2" />
                <div className="flex items-center justify-between px-4 py-2">
                  <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">
                    {stepFourData.restaurants[0].name}
                  </h1>
                  <p className="text-xs font-[--font-primary]">
                    ${stepFourData.restaurants[0].price}
                  </p>
                </div>
                <div className="flex items-center justify-between px-4 py-2">
                  <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">
                    {stepFourData.activities[0].name}
                  </h1>
                  <p className="text-xs font-[--font-primary]">
                    ${stepFourData.activities[0].price}
                  </p>
                </div>
                <div className="flex items-center justify-between px-4 py-2">
                  <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">
                    {stepTwoData.selectedOutbound.companyName}
                  </h1>
                  <p className="text-xs font-[--font-primary]">
                    ${stepTwoData.selectedOutbound.price}
                  </p>
                </div>
                <div className="flex items-center justify-between px-4 py-2">
                  <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">
                    {t("views_payment.keyInfo.total")}
                  </h1>
                  <p className="text-xl font-[--font-primary]">
                    ${paymentData.amount}
                  </p>
                </div>
                <hr className="bg-[--secondary-celeste] h-px border-none my-2" />
                <div className="flex items-center justify-between px-4 py-2">
                  <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">
                    {t("views_payment.keyInfo.payment_method.h1")}
                  </h1>
                  <div className="flex">
                    {method ? (
                      <p className="text-xs font-[--font-primary] mr-2">
                        {method}
                      </p>
                    ) : (
                      <p className="text-xs font-[--font-primary] mr-2">
                        Por favor seleccione un metodo
                      </p>
                    )}
                    <button
                      onClick={handleChangeMethod}
                      className="text-xs font-[--font-primary] text-[--secondary-celeste]"
                    >
                      {t("views_payment.keyInfo.payment_method.a")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <ButtonBlue
                onClick={handlePaymentClick}
                className="w-64 my-4"
                text={t("views_payment.button")}
              ></ButtonBlue>
            </div>
          </div>
        ) : (
          <NoPendingPaymentsMessage />
        )}
      </div>
    </div>
  );
}

export default Payment;
