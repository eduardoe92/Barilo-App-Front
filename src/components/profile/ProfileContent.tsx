import React from 'react';
import ProfilePicture from "@/assets/images/2810502.png";
import { useTranslation } from 'react-i18next';
import { useUserProfile } from '@/hooks/useUserProfile';
import { IoCameraOutline } from "react-icons/io5";

const HeaderProfile = () => {
  const { t } = useTranslation();
  const { profile } = useUserProfile();

  return (
    <div className="ml-14 flex flex-col justify-center w-screen gap-2">
      <div className="relative flex flex-row items-center justify-center text-2xl text-customBlue">
        <img
          className="md:rounded-xl md:p-2 md:h-60 md:w-3/6"
          src="/portada-perfil-bariloche.jpg"
          alt="Imagen de portada"
        />
        <div className="absolute w-24 h-24 bottom-[-50px] rounded-full bg-white">
          <img
            src={ProfilePicture}
            alt="profile picture"
            className="relative flex flex-row w-24 h-24 p-1 rounded-full "
          />
          <IoCameraOutline className='absolute w-8 h-8 p-1 cursor-pointer rounded-full bg-customBlue  text-white bottom-[4px]' />
        </div>
      </div>
      <div className="flex items-center justify-center mt-14">
        <h4 className="text-2xl font-bold font-primary text-customBlue">
          {profile ? profile.name : t("loading")}
        </h4>
      </div>
    </div>
  );
}

export default HeaderProfile;
