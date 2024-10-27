import React from 'react'
import ProfilePicture from "@/assets/images/2810502.png";
import { useTranslation } from 'react-i18next';
import { useUserProfile } from '@/hooks/useUserProfile';

const HeaderProfile = () => {
  const { t } = useTranslation();
  const { profile } = useUserProfile();
  return (
    <div className="flex flex-col items-center justify-center bg-primary-blue rounded-2xl">
          <div className="flex flex-col items-center justify-center gap-2">
            <a href="/profile">
            <img
              src={ProfilePicture}
              alt="profile picture"
              className="w-24 h-24 rounded-full cursor-pointer md:w-24 md:h-24"
            />
            </a>
            <h4 className="text-2xl font-bold font-primary text-white">
              {profile ? profile.name : t("loading")}
            </h4>
          </div>
        </div>
  )
}

export default HeaderProfile