import { useState } from "react";
import MountainIconWhite from "@/assets/images/MountainIconWhite.svg";
import MountainIconBlue from "@/assets/images/MountainIconBlue.svg";
import GroupIconBlue from "@/assets/images/GroupIconBlue.svg";
import GroupIconWhite from "@/assets/images/GroupIconWhite.svg";
import GroupMember from "@/components/GroupMember";
import InputGroup from "@/components/InputGroup";
import GroupActivity from "@/components/GroupActivity";

const dayNames = ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"];

function Group() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeTab, setActiveTab] = useState("grupo");

  const members = [
    { name: "Ana Gallinado", info: "Alumna 6to B" },
    { name: "Juan Pérez", info: "Alumno 6to A" },
    { name: "Lucía Fernández", info: "Alumna 6to B" },
  ];

  const activities = [
    {
      date: "2024-10-10",
      name: "Parrilla",
      description: "Asado, traer lo que quieran beber",
    },
    {
      date: "2024-10-11",
      name: "Reunión de equipo",
      description: "Revisar el proyecto de clase",
    },
    {
      date: "2024-10-12",
      name: "Día de deportes",
      description: "Jugar fútbol en el parque",
    },
  ];

  const today = new Date();

  const nextDays = Array.from({ length: 6 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return {
      day: date.getDay(),
      date: date.getDate(),
      fullDate: date.toISOString().split("T")[0],
    };
  });

  const selectedActivity = selectedDay
    ? activities.find((activity) => activity.date === selectedDay)
    : activities.find(
        (activity) => activity.date === today.toISOString().split("T")[0]
      );

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
    <div className="flex flex-col min-h-screen pb-16">
      <div className="flex items-center gap-2 p-3 px-7">
        <div className="flex">
          <button
            className={`rounded-full px-4 py-1 ${
              activeTab === "grupo"
                ? "bg-primary-blue text-white"
                : "text-secondary-celeste"
            }`}
            onClick={() => handleTabChange("grupo")}
          >
            <img className="w-14" src={
                activeTab === "excursiones"
                  ? GroupIconBlue
                  : GroupIconWhite
              } alt="icono de grupo" />
            <p className="font-semibold">Grupo</p>
          </button>
          <button
            className={`flex flex-col rounded-full px-4 py-1 justify-center items-center ${
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
              alt="icono de excursiones"
            />
            <p className="font-semibold">Excursiones</p>
          </button>
        </div>
        <div>
          <InputGroup onSearch={handleSearch} />
        </div>
      </div>
      <div className="py-5 bg-inactive-button-bg px-7">
        <div className="flex justify-center gap-2 mb-2">
          {nextDays.map((day, index) => (
            <div
              key={index}
              className={`${
                day.fullDate === selectedDay
                  ? "bg-secondary-celeste border-[2px]  text-white"
                  : day.fullDate === today.toISOString().split("T")[0]
                  ? "bg-primary-purple border-[2px] border-primary-celeste text-white"
                  : "bg-white text-primary-celeste border-[2px] border-white"
              } flex-col text-center w-full  py-3 rounded-3xl  font-black cursor-pointer `}
              onClick={() => handleDayClick(day.fullDate)}
            >
              <p className="text-2xl">{day.date}</p>
              <p className="font-thin tracking-tighter">{dayNames[day.day]}</p>
            </div>
          ))}
        </div>
        <div>
          {selectedActivity ? (
            <div className="p-4 mt-4 bg-white rounded-3xl">
              <p className="mb-2 text-center text-secondary-celeste ">
                {dayNames[new Date(selectedActivity.date).getDay()]} -{" "}
                {selectedDay ? "seleccionado" : "hoy"}
              </p>
              <div className="p-3 pl-5 bg-secondary-purple rounded-3xl">
                <p className="font-black text-primary-celeste">
                  {selectedActivity.name}
                </p>
                <p className="font-thin text-secondary-celeste">
                  {selectedActivity.description}
                </p>
              </div>
            </div>
          ) : (
            <div className="p-4 mt-4 bg-white rounded-3xl">
              <p>No hay actividades programadas para hoy</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex-grow px-7">
        {activeTab === "grupo" ? (
          <div>
            <div className="flex items-center gap-1 mt-5 mb-1">
              <img
                src={GroupIconBlue}
                className="w-12 py-1"
                alt="Logo de Barilo"
              />
              <p className="font-bold text-secondary-celeste">
                Integrantes del grupo
              </p>
            </div>
            {members.length === 0 ? (
              <div className="py-4 text-center">
                <p className="font-bold text-primary-celeste">
                  Aún no hay integrantes en el grupo.
                </p>
                <p>
                  Invita a gente a unirse al grupo para empezar la
                  planificación.
                </p>
              </div>
            ) : filteredMembers.length === 0 ? (
              <div className="py-4 text-center">
                <p className="font-bold text-primary-celeste">
                  No se encontraron miembros.
                </p>
                <p>Intenta buscar por otro nombre.</p>
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
            <div className="flex items-center gap-1 mt-5 mb-1 ml-1">
              <img
                className="text-primary-pink w-7"
                src={MountainIconBlue}
                alt="icono de excursiones"
              />
              <p className="font-bold text-secondary-celeste">
                Exursiones a realizar
              </p>
            </div>
            {activities.length === 0 ? (
              <div className="py-4 text-center">
                <p className="font-bold text-primary-celeste">
                  Aún no hay actividades para el grupo.
                </p>
                <p>
                  Invita a gente a unirse al grupo para empezar la
                  planificación.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-1">
                {filteredActivities.map((activity, index) => (
                  <GroupActivity
                    key={index}
                    name={activity.name}
                    date={activity.date}
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
