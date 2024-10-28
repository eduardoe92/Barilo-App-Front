import { useState, useEffect } from "react";
import MountainIconWhite from "@/assets/images/MountainIconWhite.svg";
import MountainIconBlue from "@/assets/images/MountainIconBlue.svg";
import GroupIconBlue from "@/assets/images/GroupIconBlue.svg";
import GroupIconWhite from "@/assets/images/GroupIconWhite.svg";
import GroupMember from "@/components/GroupMember";
import InputGroup from "@/components/InputGroup";
import GroupActivity from "@/components/GroupActivity";
import { useTranslation } from "react-i18next";

function Group() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeTab, setActiveTab] = useState("grupo");
  const [visibleDays, setVisibleDays] = useState(6);
  const { t } = useTranslation();

  useEffect(() => {
    const updateVisibleDays = () => {
      if (window.innerWidth >= 1024) {
        setVisibleDays(15);
      } else if (window.innerWidth >= 768) {
        setVisibleDays(10);
      } else {
        setVisibleDays(6);
      }
    };

    updateVisibleDays();
    window.addEventListener("resize", updateVisibleDays);

    return () => window.removeEventListener("resize", updateVisibleDays);
  }, []);

  const dayNames = [
    "group.dayNames.sun",
    "group.dayNames.mon",
    "group.dayNames.tue",
    "group.dayNames.wed",
    "group.dayNames.thu",
    "group.dayNames.fri",
    "group.dayNames.sat",
  ];

  const members = [
    { name: "Ana Gallinado", info: "Alumna 6to B" },
    { name: "Juan Pére", info: "Alumno 6to A" },
    { name: "Lucía Fernández", info: "Alumna 6to B" },
  ];

  const activities = [
    {
      date: "2024-10-31",
      name: "Parrilla",
      description: "Asado grupal en la plaza",
    },
    {
      date: "2024-10-31",
      name: "Ruta de los 7 lagos",
      description: "Vistas increíbles en la ruta",
    },
    {
      date: "2024-11-09",
      name: "Día de deportes",
      description: "Jugar fútbol en el parque",
    },
  ];

  const today = new Date();

  const nextDays = Array.from({ length: 15 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return {
      day: date.getDay(),
      date: date.getDate(),
      fullDate: date.toISOString().split("T")[0],
    };
  });

  const handleDayClick = (day: string) => {
    setSelectedDay(selectedDay === day ? null : day);
  };

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredActivities = activities.filter((activity) =>
    activity.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="ml-14 flex flex-col min-h-screen pb-16">
      <div className="flex items-center gap-2 p-3 px-7">
        <div className="flex">
          <button
            className={`flex flex-col rounded-full px-4 py-1 justify-center items-center w-[7em] lg:w-[8em] text-xs md:text-base ${
              activeTab === "grupo"
                ? "bg-primary-blue text-white"
                : "text-secondary-celeste"
            }`}
            onClick={() => handleTabChange("grupo")}
          >
            <img
              className="w-14"
              src={activeTab === "excursiones" ? GroupIconBlue : GroupIconWhite}
              alt="icono de grupo"
            />
            <p className="font-semibold">{t("group.group_p")}</p>
          </button>
          <button
            className={`flex flex-col rounded-full px-4 py-1 justify-center items-center w-[7em] lg:w-[8em] text-xs md:text-base ${
              activeTab === "excursiones"
                ? "bg-primary-blue text-white"
                : "text-secondary-celeste"
            }`}
            onClick={() => handleTabChange("excursiones")}
          >
            <img
              className="w-6"
              src={
                activeTab === "excursiones"
                  ? MountainIconWhite
                  : MountainIconBlue
              }
              alt="icono de excursion"
            />
            <p className="font-semibold">{t("group.excursions_p")}</p>
          </button>
        </div>
        <div className="flex items-end justify-end w-full h-full">
          <InputGroup onSearch={handleSearch} />
        </div>
      </div>
      <div className="py-5 bg-inactive-button-bg px-7">
        <div className="flex justify-center gap-2 mb-2">
          {nextDays.slice(0, visibleDays).map((day, index) => (
            <div
              key={index}
              className={`${
                day.fullDate === selectedDay
                  ? "bg-secondary-celeste border-[2px] text-white"
                  : day.fullDate === today.toISOString().split("T")[0]
                  ? "bg-primary-purple border-[2px] border-primary-celeste text-white"
                  : "bg-white text-primary-celeste border-[2px] border-white"
              } flex-col text-center w-full py-3 rounded-3xl font-black cursor-pointer`}
              onClick={() => handleDayClick(day.fullDate)}
            >
              <p className="text-2xl">{day.date}</p>
              <p className="font-thin tracking-tighter">
                {t(dayNames[day.day])}
              </p>
            </div>
          ))}
        </div>
        <div>
          {/* Filtramos las actividades para el día seleccionado */}
          {activities.filter((activity) => activity.date === selectedDay)
            .length > 0 ? (
            activities
              .filter((activity) => activity.date === selectedDay)
              .map((activity, index) => (
                <div key={index} className="p-4 mt-4 bg-white rounded-3xl">
                  <div className="p-3 pl-5 bg-secondary-purple rounded-2xl">
                    <p className="font-black text-primary-celeste">
                      {t(activity.name)}
                    </p>
                    <p className="font-thin text-secondary-celeste">
                      {t(activity.description)}
                    </p>
                  </div>
                </div>
              ))
          ) : (
            <div className="p-4 mt-4 bg-white rounded-2xl">
              <p>{t("group.no_activities_p")}</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex-grow px-7">
        {activeTab === "grupo" ? (
          <div>
            <div className="flex items-center gap-1 mt-5 mb-2">
              <img
                src={GroupIconBlue}
                className="w-12 py-1"
                alt="Logo de Barilo"
              />
              <p className="font-bold text-secondary-celeste">
                {t("group.group_members_p")}
              </p>
            </div>
            {members.length === 0 ? (
              <div className="py-4 text-center">
                <p className="font-bold text-primary-celeste">
                  {t("group.group_members_no_p")}
                </p>
                <p>{t("group.invite_user_p")}</p>
              </div>
            ) : filteredMembers.length === 0 ? (
              <div className="py-4 text-center">
                <p className="font-bold text-primary-celeste">
                  {t("group.no_members_p")}
                </p>
                <p>{t("group.try_to_search")}</p>
              </div>
            ) : (
              <div className="flex flex-col gap-1">
                {filteredMembers.map((member, index) => (
                  <GroupMember
                    key={index}
                    name={member.name}
                    info={member.info}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-1 mt-5 mb-2 ml-1">
              <img
                className="text-primary-pink w-7"
                src={MountainIconBlue}
                alt="Logo de Barilo"
              />
              <p className="font-bold text-secondary-celeste">
                {t("group.activities_p")}
              </p>
            </div>
            {activities.length === 0 ? (
              <div className="py-4 text-center">
                <p className="font-bold text-primary-celeste">
                  {t("group.no_activities_p")}
                </p>
              </div>
            ) : filteredActivities.length === 0 ? (
              <div className="py-4 text-center">
                <p className="font-bold text-primary-celeste">
                  {t("group.no_activities_p")}
                </p>
                <p>{t("group.try_to_search")}</p>
              </div>
            ) : (
              <div className="flex flex-col gap-1">
                {filteredActivities.map((activity, index) => (
                  <GroupActivity
                    key={index}
                    date={activity.date}
                    name={activity.name}
                    description={activity.description}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Group;
