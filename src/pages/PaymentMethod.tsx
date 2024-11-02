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
      <h2 className="pl-2 text-xl text-center font-primary">
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
    <div className="mb-20 md:mx-28 lg:mx-52 xl:mx-96">
      <div className="flex items-center justify-center my-8">
        <button
          className="absolute pb-1 text-2xl left-6 text-secondary-celeste"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowBack />
        </button>
        <h1 className="text-2xl font-semibold text-secondary-celeste font-primary">
          {t("views_payment.payment_method.title")}
        </h1>
      </div>
      <div>
        <h2 className="mx-8 my-1 text-xl font-primary">
          {t("views_payment.payment_method.caption_1")}
        </h2>
        <PaymentOption
          icon={CiCreditCard1}
          label={t("views_payment.payment_method.option_1")}
          onClick={() => handlePaymentMethodClick("card")}
        />
        <h2 className="mx-8 my-1 text-xl font-primary">
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
