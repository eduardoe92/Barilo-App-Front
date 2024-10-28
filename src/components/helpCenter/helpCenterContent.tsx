import { Search } from "lucide-react";
import HelpCenterContact from "./HelpCenterContact";
import HelpCenterQuestions from "./HelpCenterQuestions";
import ButtonBlue from "../ui/buttonBlue";

import { useTranslation } from "react-i18next";
import { useHelpCenter } from "@/hooks/useHelpCenter";
import { HelpCenterView } from "@/types/HelpCenter";

const HelpCenterContent: React.FC = () => {
  const { t } = useTranslation();
  const { activeView, setActiveViewHelper } = useHelpCenter();

  return (

<section className="pl-14">
<div className="w-full px-4 pt-10">
      <div className="font-bold text-black"></div>
      <header className="flex max-h-40 w-full pt-4 flex-col items-center justify-center bg-primary-blue rounded-2xl">
        <div className="w-full">
          <h1 className="text-2xl text-center font-bold text-white font-primary">
            {t("help.title")}
          </h1>
        </div>

        <div className="p-2 flex flex-col items-center w-full">
          <h2 className="text-base mb-4 text-white/65 font-semibold">
            {t("help.subtitle")}
          </h2>
          <div className="bg-white rounded-full flex items-center p-2 mb-4">
            <Search className="text-customBlue/60 mx-2" size={20} />
            <input
              type="search"
              placeholder={t("help.placeholder")}
              className="w-full bg-transparent text-customBlue outline-none"
              aria-label="Buscar en Centro de Ayuda"
            />
          </div>
        </div>
      </header>
      <nav
        className="max-w-[312px] mx-auto my-4"
        aria-label="Secciones de ayuda"
      >
        <article className="flex flex-row mb-4 justify-center w-full space-x-4">
          <ButtonBlue
            text={t("buttons.questionButton")}
            isActive={activeView === HelpCenterView.FAQ}
            onClick={() => setActiveViewHelper(HelpCenterView.FAQ)}
          />
          <ButtonBlue
            text={t("buttons.contactButton")}
            isActive={activeView === HelpCenterView.Contact}
            onClick={() => setActiveViewHelper(HelpCenterView.Contact)}
          />
        </article>
      </nav>

      {activeView === HelpCenterView.FAQ ? (
        <HelpCenterQuestions />
      ) : (
        <HelpCenterContact />
      )}
    </div>
</section>

  );
};

export default HelpCenterContent;
