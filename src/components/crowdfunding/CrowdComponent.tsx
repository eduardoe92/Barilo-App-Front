import { CrowdfundingData } from "@/types/Crowdfunding";
import { useTranslation } from "react-i18next";
import ButtonBlue from "../ui/buttonBlue";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import i18next from "i18next";

const profileTexts = {
  organizer: "createCrowd",
  donor: "donate",
  approvedDonation: "approvedDonation",
};

const CrowdComponent: React.FC<CrowdfundingData> = (data) => {
  const { t } = useTranslation();
  return (
    <main className="flex flex-col items-center justify-center pt-4 font-primary text-secondary-celeste">
      <div className="w-full max-w-md">
        {i18next.exists(`crowd.${data.profile}.title`) ? (
          <h1 className="mb-2 text-4xl font-bold text-primary-pink md:text-5xl lg:text-6xl">
            <ReactMarkdown children={data.title}></ReactMarkdown>
          </h1>
        ) : (
          data.title && (
            <h1 className="mb-2 text-4xl font-bold text-primary-pink md:text-5xl lg:text-6xl">
              <ReactMarkdown children={data.title}></ReactMarkdown>
            </h1>
          )
        )}

        {i18next.exists(`crowd.${data.profile}.subtitle`) ? (
          <h2 className="text-4xl tracking-tight text-center lg:text-5xl ">
            <ReactMarkdown
              children={t(`crowd.${data.profile}.subtitle`)}
            ></ReactMarkdown>
          </h2>
        ) : (
          data.subtitle && (
            <h2 className="text-3xl tracking-tight text-center md:text-4xl lg:text-5xl ">
              <ReactMarkdown children={data.subtitle}></ReactMarkdown>
            </h2>
          )
        )}

        {i18next.exists(`crowd.${data.profile}.text`) ? (
          <div className="px-10 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <p className="text-2xl text-center md:text-2xl lg:text-3xl leading-1">
              <ReactMarkdown
                children={t(`crowd.${data.profile}.text`)}
              ></ReactMarkdown>
            </p>
          </div>
        ) : (
          data.text && (
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <p className="text-2xl tracking-tight md:text-2xl lg:text-3xl leading-1">
                <ReactMarkdown children={data.text}></ReactMarkdown>
              </p>
            </div>
          )
        )}
      </div>

      <div className="flex justify-center w-full max-w-sm my-10 h-60">
        {data.image && (
          <img
            className="w-full rounded-lg h-60"
            src={data.image}
            alt={t("crowd.imageAlt")}
          />
        )}
      </div>
      <div className="flex flex-col justify-center gap-4 space-x-4 md:flex-row">
        <Link to="/crowdfundingForm">
          <ButtonBlue
            text={t(
              `buttons.${
                profileTexts[data.profile as keyof typeof profileTexts]
              }`
            )}
            isActive={true}
          />
        </Link>
      </div>
    </main>
  );
};

export default CrowdComponent;
