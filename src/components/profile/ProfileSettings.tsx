"use client";

import {
  IoNotificationsOutline,
  IoKeyOutline,
  IoPersonOutline,
  IoChevronForwardSharp,
} from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";

const link = [
  {
    name: "profile_user.settings.link.name_notification_settings",
    to: "#",
    icon: <IoNotificationsOutline />,
  },
  {
    name: "profile_user.settings.link.name_password_management",
    to: "#",
    icon: <IoKeyOutline />,
  },
  {
    name: "profile_user.settings.link.name_language",
    to: "/language",
    icon: <MdLanguage />,
  },
  {
    name: "profile_user.settings.link.name_delete_account",
    to: "#",
    icon: <IoPersonOutline />,
  },
];

export default function ProfileSettings() {
  const { t } = useTranslation();

  return (
    <>
      <section className="">
        <div className="w-full px-4 pt-10">
          <header className="flex flex-col items-center justify-center h-40 bg-primary-blue rounded-2xl">
            <h3 className="text-2xl font-bold text-center text-white font-primary">
              {t("profile_user.settings.title_h3")}
            </h3>
            <span className="text-2xl font-bold text-center text-white font-primary">
            {t("profile_user.settings.title_span")}
            </span>
          </header>
        </div>
        <div className="flex flex-col justify-center w-full px-4 pt-6 pb-24 md:items-center">
          {link.map((item) => (
            <div
              key={item.name}
              className="relative flex flex-row items-center justify-start p-4 group gap-x-4 md:w-5/12"
            >
              <div className="flex text-3xl text-customBlue">
                {item.icon}
              </div>
              <div className="flex flex-row items-center justify-between w-full text-customBlue">
                <Link
                  to={item.to}
                  className="flex text-xl font-semibold cursor-pointer"
                >
                  {t(item.name)}
                  <span className="absolute inset-0" />
                </Link>
                <div className="flex items-center justify-end text-xl">
                  <IoChevronForwardSharp className="flex text-2x1" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <Outlet />
      </section>
    </>
  );
}
