import { useTranslation } from "react-i18next";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { FaFlagUsa } from "react-icons/fa";

const Language = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <section className="">
        <div className="w-full px-4 pt-10">
          <header className="flex h-40 flex-col items-center justify-center bg-primary-blue rounded-2xl">
            <h3 className="text-2xl text-center font-bold text-white font-primary">{t('profile_user.language.title')}</h3>
          </header>
          <div className="w-full flex flex-col items-center justify-center pt-26 text-customBlue">
              <button
                className="relative w-60 flex flex-row items-center justify-start p-4 group  gap-x-6"
                onClick={() => changeLanguage("en")}
              >
                <FaFlagUsa className="text-xl flex items-center justify-start" />
                <h2 className="flex text-xl font-semibold cursor-pointer ">{t('profile_user.language.inglés_english')}</h2>
              </button>
              <button
                className="relative w-60 flex flex-row items-center justify-start p-4 group  gap-x-6"
                onClick={() => changeLanguage("es")}
              >
                <FaFontAwesomeFlag className="text-xl flex items-center justify-start" />
                <h2 className="flex text-xl font-semibold cursor-pointer ">{t('profile_user.language.español_spanish')}</h2>
              </button>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Language;


