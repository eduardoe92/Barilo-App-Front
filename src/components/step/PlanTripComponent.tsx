import { useState } from "react";
import ProgressBar from "./ProgressBar";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import { StepOneFormData } from "../../types/step/StepOneFormData";
import { StepTwoFormData } from "../../types/step/StepTwoFormData";
import { StepThreeFormData } from "../../types/step/StepThreeFormData";
import { StepFourFormData } from "../../types/step/StepFourFormData";
import { t } from "i18next";

const PlanTripComponent: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepOneData, setStepOneData] = useState<StepOneFormData | null>(null);
  const [stepTwoData, setStepTwoData] = useState<StepTwoFormData | null>(null);
  const [stepThreeData, setStepThreeData] = useState<StepThreeFormData | null>(
    null
  );
  const [stepFourData, setStepFourData] = useState<StepFourFormData | null>(
    null
  );
  const [destinationId, setDestinationId] = useState<number | null>(null);

  const handleStepChange = (step: number) => {
    if (step <= currentStep) {
      setCurrentStep(step);
    }
  };

  const handleNextStepOne = (data: StepOneFormData) => {
    setStepOneData(data);
    setCurrentStep(2);
  };

  const handleNextStepTwo = (data: StepTwoFormData) => {
    setStepTwoData(data);
    setDestinationId(data.destinationId);
    setCurrentStep(3);
  };

  const handleNextStepThree = (data: StepThreeFormData) => {
    setStepThreeData(data);
    setCurrentStep(4);
  };

  const handleNextStepFour = (data: StepFourFormData) => {
    setStepFourData(data);
    setCurrentStep(5);
  };

  return (
    <section className="flex flex-col items-center justify-center mb-5 overflow-hidden text-justify text-secondary-celeste font-primary">
      <div className="container flex flex-col items-center mx-auto">
        <div className="w-full">
          <h1 className="pb-2 text-4xl tracking-tight text-center lg:text-5xl">
            {t("createTrip.create.process")}
          </h1>

          <ProgressBar
            currentStep={currentStep}
            onStepChange={handleStepChange}
          />

          {currentStep === 1 && (
            <StepOne onNext={handleNextStepOne} stepOneData={stepOneData} />
          )}
          {currentStep === 2 && (
            <StepTwo onNext={handleNextStepTwo} stepTwoData={stepTwoData} />
          )}
          {currentStep === 3 && (
            <StepThree
              onNext={handleNextStepThree}
              stepThreeData={stepThreeData}
              destinationId={destinationId}
            />
          )}
          {currentStep === 4 && (
            <StepFour
              onNext={handleNextStepFour}
              stepFourData={stepFourData}
              destinationId={destinationId}
            />
          )}
          {currentStep === 5 && (
            <StepFive
              stepOneData={stepOneData}
              stepTwoData={stepTwoData}
              stepThreeData={stepThreeData}
              stepFourData={stepFourData}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default PlanTripComponent;
