import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CustomButton } from "../CustomButton";

function WelcomeSection() {
  const { t } = useTranslation();
  return (
    <section className="w-full py-12 text-white md:py-24 lg:py-32 xl:py-36 bg-secondary-pink">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-4xl md:text-6xl lg:text-7xl font-primary">
            {t("landing.welcome.title")}
            <br />
            {t("landing.welcome.subtitle")}
          </h1>
          <p className="mx-auto max-w-[15em] md:max-w-[27em] lg:max-w-[43em] text-md md:text-2xl lg:text-base xl:text-xl font-secondary text-white line-clamp-8 md:line-clamp-5 lg:line-clamp-3">
            {t("landing.welcome.text1")}
          </p>
          <p className="mx-auto max-w-[15em] md:max-w-[27em] lg:max-w-[43em] text-md md:text-2xl lg:text-base xl:text-xl font-secondary text-white line-clamp-8 md:line-clamp-5 lg:line-clamp-3">
            {t("landing.welcome.text2")}
          </p>
          <div className="flex flex-col items-center justify-center gap-y-3 md:flex-row md:space-x-4">
            <Link to="/auth">
              <CustomButton className="flex flex-wrap w-[7em] bg-white text-secondary-pink hover:bg-secondary-purple">
                {t("buttons.landing.login")}
              </CustomButton>
            </Link>
            <Link to="/auth?view=register">
              <CustomButton className="flex flex-wrap w-[7em] text-white bg-transparent border border-white hover:bg-white hover:text-secondary-pink">
                {t("buttons.landing.register")}
              </CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
