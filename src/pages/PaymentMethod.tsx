import { IoIosArrowBack } from "react-icons/io";
import { CiCreditCard1 } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";
import { SiMercadopago } from "react-icons/si";
import { RiPaypalLine } from "react-icons/ri";
import { Bitcoin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import IconPayComponent from "@/components/icon/IconPayComponent";

const PaymentOption = ({ icon: Icon, label, onClick }) => (
  <div
    onClick={onClick}
    className="flex items-center justify-between mx-8 my-2 bg-white cursor-pointer rounded-2xl h-11 text-secondary-celeste"
  >
    <div className="flex items-center pl-2">
      <Icon className="text-2xl" />
      <h2 className="text-xl text-center pl-2 font-['League_Spartan']">
        {label}
      </h2>
    </div>
    <FaRegCircle className="mr-2" />
  </div>
);

function PaymentMethod() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { stepOneData, stepTwoData, stepThreeData, stepFourData } =
    location.state || {};

  const handlePaymentMethodClick = (method) => {
    navigate(`/payment-method-${method}`, {
      state: { stepOneData, stepTwoData, stepThreeData, stepFourData },
    });
  };

  return (
    <div className="md:mx-28 lg:mx-52 xl:mx-96">
      <div className="flex items-center justify-center my-8">
        <button
          className="absolute left-6 pb-1 text-[--secondary-celeste] text-2xl"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowBack />
        </button>
        <h1 className="text-2xl text-[--secondary-celeste] font-['League_Spartan'] font-semibold">
          {t("views_payment.payment_method.title")}
        </h1>
      </div>
      <div>
        <h2 className="mx-8 text-xl font-['League_Spartan'] my-1">
          {t("views_payment.payment_method.caption_1")}
        </h2>
        <PaymentOption
          icon={CiCreditCard1}
          label={t("views_payment.payment_method.option_1")}
          onClick={() => handlePaymentMethodClick("card")}
        />
        <h2 className="mx-8 text-xl font-['League_Spartan'] my-1">
          {t("views_payment.payment_method.caption_2")}
        </h2>
        <PaymentOption
          icon={SiMercadopago}
          label={t("views_payment.payment_method.option_2")}
          onClick={() => handlePaymentMethodClick("mercado-pago")}
        />
        <PaymentOption
          icon={RiPaypalLine}
          label={t("views_payment.payment_method.option_3")}
          onClick={() => handlePaymentMethodClick("paypal")}
        />
        <PaymentOption
          icon={Bitcoin}
          label={t("views_payment.payment_method.option_4")}
          onClick={() => handlePaymentMethodClick("personal-pay")}
        />
      </div>
      <IconPayComponent />
    </div>
  );
}

export default PaymentMethod;
