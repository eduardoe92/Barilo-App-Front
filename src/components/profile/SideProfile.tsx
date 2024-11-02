import {
  IoPersonOutline,
  IoHeartOutline,
  IoLockClosedOutline,
  IoSettingsOutline,
  IoHelp,
  IoWalletOutline,
  IoLogOutOutline,
} from "react-icons/io5";
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

  const [open, setOpen] = useState(false);
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
    {
      name: "profile_user.component_profile.link.name_profile",
      to: "/editProfile",
      icon: <IoPersonOutline size={25} />,
    },
    {
      name: "profile_user.component_profile.link.name_favorites",
      to: "#",
      icon: <IoHeartOutline size={25} />,
    },
    {
      name: "profile_user.component_profile.link.name_crowfounding",
      to: "/crowdfunding",
      icon: <IoWalletOutline size={25} />,
    },
    {
      name: "profile_user.component_profile.link.name_privacy_policies",
      to: "#",
      icon: <IoLockClosedOutline size={25} />,
    },
    {
      name: "profile_user.component_profile.link.name_settings",
      to: "/profileSettings",
      icon: <IoSettingsOutline size={25} />,
    },
    {
      name: "profile_user.component_profile.link.name_help",
      to: "/help-center",
      icon: <IoHelp size={25} />,
    },
    {
      name: "profile_user.component_profile.button_sign_out",
      icon: <IoLogOutOutline size={25} />,
      onClick: handleLogout,
    },
  ];

  return (
    <nav
      ref={sideNavRef}
      className={`fixed top-[var(--header-height)] bottom-[var(--footer-height)] flex flex-col justify-between left-0 z-10 bg-white shadow-xl transition-all duration-300 h-auto
      ${open ? "w-72 px-2.5" : "w-14"}`}
      style={{ overflow: "hidden" }}
    >
      <div
        className={` ${!open && "flex items-center justify-center"} ${
          open && "justify-start"
        }`}
      >
        <MdMenuOpen
          size={34}
          className={`flex text-customBlue duration-300 cursor-pointer mt-2 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
      </div>
      <ul className={`flex flex-col h-4/5 ${!open && "items-center"}`}>
        {links.map((item, index) => (
          <li
            key={index}
            className="relative flex items-center my-2 duration-300 rounded-md cursor-pointer text-customBlue group"
          >
            {item.to ? (
              <Link
                to={item.to}
                className={`flex items-center hover:scale-105 hover:bg-primary-blue w-full hover:rounded-3xl hover:text-white line-clamp-1 ${
                  open ? "gap-x-4" : "justify-center"
                }`}
              >
                <div className="flex items-center justify-center text-primary-celeste bg-inactive-button-bg rounded-full p-1.5 transition hover:scale-110 cursor-pointer hover:text-lg">
                  {item.icon}
                </div>
                {open && (
                  <span className="font-bold tracking-wide line-clamp-1">
                    {t(item.name)}
                  </span>
                )}
              </Link>
            ) : (
              <button
                onClick={item.onClick}
                className={`flex items-center hover:scale-105 hover:bg-primary-blue w-full hover:rounded-3xl hover:text-white ${
                  open ? "gap-x-4" : "justify-center"
                }`}
              >
                <div className="flex items-center justify-center text-primary-celeste bg-inactive-button-bg rounded-full p-1.5 transition hover:scale-110 cursor-pointer hover:text-lg">
                  {item.icon}
                </div>
                {open && (
                  <span className="font-bold tracking-wide line-clamp-1">
                    {t(item.name)}
                  </span>
                )}
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideProfile;
