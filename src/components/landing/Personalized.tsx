import { useTranslation } from "react-i18next";

function Personalized() {
  const { t } = useTranslation();

  const steps = [
    { number: 1, captionKey: "caption1", paragraphKey: "paragraph1" },
    { number: 2, captionKey: "caption2", paragraphKey: "paragraph2" },
    { number: 3, captionKey: "caption3", paragraphKey: "paragraph3" },
    { number: 4, captionKey: "caption4", paragraphKey: "paragraph4" },
    { number: 5, captionKey: "caption5", paragraphKey: "paragraph5" },
    { number: 6, captionKey: "caption6", paragraphKey: "paragraph6" },
  ];

  return (
    <section id="personalized" className="w-full py-12 md:py-24 lg:py-32 bg-secondary-celeste">
      <div className="container px-4 mx-auto md:px-6">
        <h2 className="mb-12 text-3xl font-bold tracking-tighter text-center text-white sm:text-4xl md:text-5xl font-primary">
          {t("landing.customize.title")}
        </h2>
        <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl font-bold bg-white rounded-full text-primary-purple">
                {step.number}
              </div>
              <h3 className="mb-2 text-xl font-bold text-white line-clamp-1">
                {t(`landing.customize.${step.captionKey}`)}
              </h3>
              <p className="text-white font-secondary lg:max-w-[30em] max-w-[14.7em] line-clamp-3">
                {t(`landing.customize.${step.paragraphKey}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Personalized;
