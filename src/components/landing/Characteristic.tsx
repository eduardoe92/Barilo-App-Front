import { useTranslation } from "react-i18next";
import { FaRegPaperPlane, FaRegCreditCard } from "react-icons/fa";
import { RiGroupLine } from "react-icons/ri";

const characteristicData = [
  {
    icon: <FaRegPaperPlane className="mb-2 text-3xl md:mb-5 text-primary-blue md:text-7xl" />,
    titleKey: "landing.characteristics.destination",
    paragraphKey: "landing.characteristics.paragraphDestination",
  },
  {
    icon: <FaRegCreditCard className="mb-2 text-3xl md:mb-5 text-primary-blue md:text-7xl" />,
    titleKey: "landing.characteristics.plans",
    paragraphKey: "landing.characteristics.paragraphPlans",
  },
  {
    icon: <RiGroupLine className="mb-2 text-3xl md:mb-5 text-primary-blue md:text-7xl" />,
    titleKey: "landing.characteristics.groups",
    paragraphKey: "landing.characteristics.paragraphGroups",
    colSpanClass: "md:col-span-2 lg:col-span-1",
  },
];

function Characteristic() {
  const { t } = useTranslation();
  return (
    <section id="characteristic" className="w-full py-12 bg-white md:py-24 lg:py-32">
      <div className="container px-4 mx-auto md:px-6">
        <h2 className="mb-12 text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl text-primary-celeste font-primary">
          {t("landing.characteristics.title")}
        </h2>
        <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
          {characteristicData.map(({ icon, titleKey, paragraphKey, colSpanClass }, index) => (
            <div key={index} className={`flex flex-col items-center text-center ${colSpanClass || ""}`}>
              {icon}
              <h3 className="mb-2 text-xl font-bold text-primary-celeste line-clamp-1">
                {t(titleKey)}
              </h3>
              <p className="text-secondary-blue font-secondary lg:max-w-[18em] max-w-[16.9em] line-clamp-3">
                {t(paragraphKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Characteristic;
