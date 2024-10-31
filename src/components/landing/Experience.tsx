import { useTranslation } from "react-i18next";
import snowImage from "@/assets/images/snow.webp";
import snowImage2 from "@/assets/images/snow2.webp";
import snowImage3 from "@/assets/images/snow3.webp";

function Experience() {
  const { t } = useTranslation();

  const images = [
    { src: snowImage, alt: "Grupo esquiando", spanClass: "" },
    { src: snowImage3, alt: "Amigos en la nieve", spanClass: "" },
    { src: snowImage2, alt: "Cartel de Bariloche", spanClass: "md:col-span-2 lg:col-span-1" },
  ];

  return (
    <section
      id="experience"
      className="w-full py-12 bg-white md:py-24 lg:py-32"
    >
      <div className="container px-4 mx-auto md:px-6">
        <h2 className="mb-12 text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl text-primary-celeste font-primary">
          {t("landing.bariloExperience")}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`object-cover w-full h-auto transition-transform transform rounded-lg shadow-lg hover:scale-105 hover:shadow-xl ${image.spanClass}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
