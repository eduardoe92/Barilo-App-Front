import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import FlagSpain from "../assets/Flags/es.svg";
import FlagUsa from "../assets/Flags/us.svg";
import { MdMenuOpen } from "react-icons/md";
import { TbSettingsSearch } from "react-icons/tb";
import { LuPlane } from "react-icons/lu";
import { GrContact } from "react-icons/gr";
import { IoEarthSharp } from "react-icons/io5";
import TextIconComponent from "./TextIconComponent";
import Footer from "./Footer";
import SocialNetworks from "./SocialNetworks";
import { Link } from "react-router-dom";

const menuItems = [
  {
    icons: <TbSettingsSearch size={30} />,
    label: "navbar.items.characteristic",
    href: "#characteristic",
  },
  {
    icons: <LuPlane size={30} />,
    label: "navbar.items.personalized",
    href: "#personalized",
  },
  {
    icons: <IoEarthSharp size={30} />,
    label: "navbar.items.experience",
    href: "#experience",
  },
  {
    icons: <GrContact size={30} />,
    label: "navbar.items.contact",
    href: "#contact",
  },
];

export default function SideNavBar() {
  const { i18n, t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [open, setOpen] = useState(false);
  const sideNavRef = useRef(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
    document.querySelector(`#${lng}`).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
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
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      ref={sideNavRef}
      className={`shadow-md h-screen bg-white z-50 flex flex-col items-center justify-between fixed top-0 duration-100 text-primary-pink ${
        open ? "w-60" : "w-14"
      } md:container md:relative md:flex-row md:h-20 lg:w-auto lg:px-5 py-8 md:mx-auto md:shadow-none`}
    >
      <div className="flex flex-row items-center justify-between h-20 md:p-0 md:items-start md:h-14">
        <Link
          to="/"
          className={`${
            !open && "hidden"
          } h-14 w-full md:flex md:items-center lg:pl-5`}
        >
          <TextIconComponent />
        </Link>
        <div className="w-8 h-16">
          <MdMenuOpen
            size={34}
            className={`duration-500 cursor-pointer ${
              !open && "rotate-180"
            } md:hidden`}
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      <ul
        className={`${!open && "items-center"} ${
          open && " w-11/12 md:w-auto"
        } flex flex-col h-2/4 md:flex-row md:items-center md:h-auto`}
      >
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="relative flex items-center gap-2 p-2 my-2 duration-300 rounded-md cursor-pointer hover:bg-primary-purple grou md:hover:bg-white lg:pr-2"
          >
            <a
              href={item.href}
              className={`${open && "gap-x-3"} flex items-center `}
            >
              <div className="flex items-center justify-center md:hidden">
                {item.icons}
              </div>
              <div className="hidden font-bold tracking-wide duration-300 hover:scale-105 md:flex md:min-w-[6rem] lg:min-w-[9rem] md:justify-center text-sm md:text-base lg:text-xl hover:text-primary-purple">
                {t(item.label)}
              </div>
              <p
                className={`${
                  !open && "w-0 translate-x-24"
                } text-lg font-bold tracking-wider h-auto duration-300 overflow-hidden md:overflow-visible md:translate-x-0 md:hidden`}
              >
                {open ? t(item.label) : t(item.label).split(" ")[0]}
              </p>
              <p
                className={`${
                  open && "hidden"
                } absolute left-32 shadow-md rounded-md
                  w-0 p-0 text-primary-pink bg-primary-purple duration-300 overflow-hidden
                  md:hidden
                `}
              >
                {t(item.label)}
              </p>
            </a>
          </li>
        ))}

        <div className="flex py-2 font-bold tracking-wider duration-300 rounded-md items-center text-lg hover:bg-primary-purple md:hover:bg-white md:hover:scale-110">
          <button
            className={`${
              open && "gap-x-2"
            } flex items-center transition-transform transform`}
            onClick={() =>
              changeLanguage(currentLanguage === "es" ? "en" : "es")
            }
          >
            <img
              src={currentLanguage === "es" ? FlagUsa : FlagSpain}
              alt={currentLanguage === "es" ? "Español" : "English"}
              className="mx-2 rounded-full w-7 h-7 md:w-8 md:h-8 md:mx-0"
            />
            <p
              className={`${
                !open && "w-0 translate-x-24"
              }  text-lg font-bold tracking-wider h-2/3 duration-300 overflow-hidden md:overflow-visible md:translate-x-0 md:hidden`}
            >
              {t("navbar.items.language")}
            </p>
            <p
              className={`${
                open && "hidden"
              } absolute left-32 shadow-md rounded-md
                w-0 p-0 text-primary-pink bg-primary-purple duration-100 overflow-hidden
                group-hover:w-fit group-hover:p-2 group-hover:left-16 md:inline hidden 
              `}
            >
              {currentLanguage === "es" ? "Language" : "Idioma"}
            </p>
          </button>
        </div>
      </ul>
      {/* footer */}
      <div className={`${open && "hidden"} md:hidden`}>
        <SocialNetworks className={"flex flex-col gap-4 mb-4"} />
      </div>
      <div className={`${!open && "hidden"} md:hidden md:h-0`}>
        <Footer />
      </div>
    </nav>
  );
}
