import { useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import logo from "@/assets/images/imago.svg";
import { LoginFormComponent } from "@/components/login/LoginFormComponent";
import { RegisterFormComponent } from "@/components/login/RegisterFormComponent";
import { ForgotPasswordComponent } from "@/components/login/ForgotPasswordComponent";
import ModalComponent from "@/components/ModalComponent";

export default function AuthPage() {
  const { t } = useTranslation();
  const query = new URLSearchParams(location.search);
  const view = query.get("view") || "login";

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const showModal = (content) => {
    setModalContent(content);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setModalContent(null);
  };

  const [activeStep, setActiveStep] = useState(view === "register" ? 1 : 0);
  const components = [
    {
      title: t("page_login"),
      component: <LoginFormComponent changeStep={setActiveStep} showModal={showModal} />,
    },
    {
      title: t("page_register"),
      component: <RegisterFormComponent changeStep={setActiveStep} showModal={showModal} />,
    },
    {
      title: t("forgot_password.info"),
      component: <ForgotPasswordComponent changeStep={setActiveStep} showModal={showModal} />,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setActiveStep(current),
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 bg-white py-14 md:flex md:justify-center md:items-center">
      <Link to="/">
        <img
          src={logo}
          alt="Barilo"
          className="w-[300px] h-auto cursor-pointer"
        />
      </Link>
      <div className="flex justify-center py-2">
        {components.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              activeStep === index ? "bg-primary-celeste" : "bg-primary-blue"
            }`}
          />
        ))}
      </div>
      <h2 className="self-stretch text-[#006BA8] text-[14.92px] font-normal font-secondary leading-[17.91px] text-center">
        {components[activeStep].title}
      </h2>
      <div className="w-full max-w-[366px] px-4">
        <Slider key={activeStep} {...settings} initialSlide={activeStep}>
          {components.map((item, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-full p-2">{item.component}</div>
            </div>
          ))}
        </Slider>
      </div>
      {isModalVisible && (
        <ModalComponent
          title={modalContent.title}
          message={modalContent.message}
          buttons={modalContent.buttons}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
