import { useTranslation } from "react-i18next";
import TextIconComponent from "../icon/TextIconComponent";
import SocialNetworks from "./SocialNetworks";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="container flex flex-col items-center px-5 py-8 mx-auto bg-white md:flex-row">
      <a href="/" className="flex items-center justify-center md:justify-start">
        <TextIconComponent />
      </a>
      <p className="py-1 text-xs text-primary-celeste md:ml-4 md:pl-4 md:border-l-2 md:border-secondary-celeste md:py-2 sm:mt-0 md:text-sm lg:text-lg">
        © {currentYear}
      </p>
      <p className="py-1 text-xs text-primary-celeste md:ml-2 sm:border-secondary-celeste sm:mt-0 md:text-sm lg:text-lg">
        {t("footer.copyright")}
      </p>
      <SocialNetworks className={"flex flex-row justify-center py-1 lg:py-0 sm:ml-auto sm:justify-start"}/>
    </footer>
  );
};

export default Footer;
