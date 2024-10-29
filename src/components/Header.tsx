import { FaRegBell } from "react-icons/fa";
import ProfilePicture from "@/assets/images/2810502.png";
import { Link } from "react-router-dom";
import { useUserProfile } from "@/hooks/useUserProfile";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import PaymentHistoryComponent from "./PaymentHistoryComponent";

const Header = () => {
  const { t } = useTranslation();
  const { profile } = useUserProfile();
  const [isNotificationOpen, setNotificationOpen] = useState(false);

  const handleBellClick = () => {
    setNotificationOpen(!isNotificationOpen);
    console.log(isNotificationOpen);
  };

  return (
    <div className="sticky top-0 left-0 z-20 w-full h-24 bg-white shadow-md">
      <div className="flex justify-between px-8 pt-4 pb-3">
        <div className="flex items-center gap-1">
          <Link to="/home">
            <img
              src={ProfilePicture}
              alt="profile picture"
              className="w-12 h-12 rounded-full cursor-pointer"
            />
          </Link>
          <div className="leading-tight">
            <p className="text-secondary-celeste">{t("home.header")}</p>
            <p className="font-bold text-primary-celeste">
              {profile ? profile.name : t("loading")}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaRegBell
            onClick={handleBellClick}
            size={32}
            className="bg-inactive-button-bg rounded-full p-1.5 text-primary-celeste transition hover:scale-110 cursor-pointer hover:text-lg"
          />
          {isNotificationOpen && <PaymentHistoryComponent />}
        </div>
      </div>
    </div>
  );
};

export default Header;
