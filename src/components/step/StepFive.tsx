import React from "react";
import { useNavigate } from "react-router-dom";
import { StepOneFormData } from "../../types/step/StepOneFormData";
import { StepTwoFormData } from "../../types/step/StepTwoFormData";
import { StepThreeFormData } from "../../types/step/StepThreeFormData";
import { StepFourFormData } from "../../types/step/StepFourFormData";
import { useTranslation } from "react-i18next";
import ButtonBlue from "../ui/buttonBlue";

interface StepFiveProps {
  stepOneData: StepOneFormData | null;
  stepTwoData: StepTwoFormData | null;
  stepThreeData: StepThreeFormData | null;
  stepFourData: StepFourFormData | null;
}

const StepFive: React.FC<StepFiveProps> = ({
  stepOneData,
  stepTwoData,
  stepThreeData,
  stepFourData,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    navigate("/payment", {
      state: { stepOneData, stepTwoData, stepThreeData, stepFourData },
    });
  };

  const handleCancel = () => {
    navigate("/home");
  };

  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  const tableRows = [
    {
      label: t("stepOne.groupName"),
      value: stepOneData?.groupName
        ? capitalizeFirstLetter(stepOneData.groupName)
        : t("stepFive.not_specified"),
    },
    {
      label: t("stepOne.numberOfPeople"),
      value: stepOneData?.numberOfPeople || t("stepFive.not_specified"),
    },
    {
      label: t("stepTwo.origin"),
      value: stepTwoData?.origin
        ? capitalizeFirstLetter(stepTwoData.origin)
        : t("stepFive.not_specified"),
    },
    {
      label: t("stepTwo.destination"),
      value: stepTwoData?.destination
        ? capitalizeFirstLetter(stepTwoData.destination)
        : t("stepFive.not_specified"),
    },
    {
      label: t("stepThree.hotel"),
      value:
        stepThreeData?.hotels?.[0]?.name || t("stepFive.not_specified"),
    },
    {
      label: t("stepFour.package"),
      value:
        stepFourData?.activities?.[0]?.name || t("stepFive.not_specified"),
    },
    {
      label: t("stepFour.meals"),
      value:
        stepFourData?.restaurants?.[0]?.name || t("stepFive.not_specified"),
    },
  ];

  return (
    <div className="p-1">
      <h3 className="mb-4 text-xl font-semibold text-center text-primary-celeste">
        {t("stepFive.title")}
      </h3>
      <table className="min-w-full mx-auto border-4 border-secondary-celeste rounded-xl shadow-md md:min-w-[30em] lg:min-w-[35em] bg-inactive-button-bg">
        <tbody className="text-primary-celeste">
          {tableRows.map((row, index) => (
            <tr key={index}>
              <td className="p-2 border-b border-secondary-celeste">
                <strong>{row.label}:</strong> {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center my-8">
        <div className="flex space-x-4 w-[18em]">
          <ButtonBlue
            text={t("buttons.goToPayButton")}
            onClick={handleProceedToPayment}
            isActive={true}
          />
          <ButtonBlue
            text={t("buttons.cancelButton")}
            onClick={handleCancel}
            isActive={false}
          />
        </div>
      </div>
    </div>
  );
};

export default StepFive;
