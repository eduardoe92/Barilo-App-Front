import { useTranslation } from "react-i18next";
import { CustomButton } from "../CustomButton";
import { Input } from "../ui/input";

function Contact() {
  const { t } = useTranslation();
  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-secondary-pink"
    >
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl font-primary">
            {t("landing.contactUs.title")}
          </h2>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex flex-col gap-2 text-left">
              <label htmlFor="email" className="text-white visually-hidden">
                {t("landing.contactUs.label")}
              </label>
              <Input
                id="email"
                type="email"
                placeholder={t("landing.contactUs.inputPlaceholder")}
                className="bg-white font-secondary focus:bg-white"
              />
              <CustomButton
                type="submit"
                className="w-full mt-3 bg-white text-secondary-pink hover:bg-secondary-purple"
              >
                {t("landing.contactUs.button")}
              </CustomButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
