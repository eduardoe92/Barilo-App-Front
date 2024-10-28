import {
  IoPersonOutline, IoHeartOutline, IoLockClosedOutline, IoSettingsOutline, IoHelp,
  IoWalletOutline, IoLogOutOutline
} from "react-icons/io5";
import IconComponent from "../IconComponent";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { Link } from "react-router-dom";

const SideProfile = () => {
  const { t } = useTranslation();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [open, setOpen] = useState(window.innerWidth >= 768);
  const sideNavRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const links = [
    { name: "profile_user.component_profile.link.name_profile", to: "/editProfile", icon: <IoPersonOutline /> },
    { name: "profile_user.component_profile.link.name_favorites", to: "#", icon: <IoHeartOutline /> },
    { name: "profile_user.component_profile.link.name_crowfounding", to: "/crowdfunding", icon: <IoWalletOutline /> },
    { name: "profile_user.component_profile.link.name_privacy_policies", to: "#", icon: <IoLockClosedOutline /> },
    { name: "profile_user.component_profile.link.name_settings", to: "/profileSettings", icon: <IoSettingsOutline /> },
    { name: "profile_user.component_profile.link.name_help", to: "/help-center", icon: <IoHelp /> },
  ];

  return (
    <nav
      ref={sideNavRef}
      className={`fixed top-0 py-24 left-0 shadow-md transition-all h-screen bg-white z-10 flex flex-col justify-between duration-100
      ${open ? "w-80 pl-3 pt-24" : "w-14 flex items-center"}`}
    >
      <div className="w-8 h-8">
        <MdMenuOpen
          size={34}
          className={`flex text-customBlue duration-300 cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
      </div>
      <ul className={`flex flex-col h-2/3 ${!open && "items-center h-4/5"}`}>
        {links.map((item) => (
          <li
            key={item.name}
            className="relative flex items-center my-3 duration-300 text-customBlue rounded-md cursor-pointer group"
          >
            <Link to={item.to} className={`flex items-center ${open ? "gap-x-5" : "justify-center"}`}>
              <div className="flex items-center justify-center text-xl text-customBlue">
                {item.icon}
              </div>
              {open && (
                <span className="font-bold tracking-wide duration-300">{t(item.name)}</span>
              )}
            </Link>
          </li>
        ))}
        <div className={`flex items-center mt-3 pl-1 text-customBlue ${open ? "gap-x-4" : "justify-center"}`}>
          <div className="flex items-center justify-center text-xl text-customBlue">
            <IoLogOutOutline />
          </div>
          <button
            className={`flex text-2x1 font-bold cursor-pointer transition-all duration-300 ${!open && "hidden"}`}
            onClick={handleLogout}
          >
            {t("profile_user.component_profile.button_sign_out")}
          </button>
        </div>
      </ul>
      <div className="flex items-center justify-center mt-5">
        <IconComponent />
      </div>
    </nav>
  );
};

export default SideProfile;
