'use client';

import { useState } from 'react';
import { useOnboarding } from '@/hooks/useOnboarding';
import ProgressBar from './ProgressBar';
import StepIndicator from './StepIndicator';
import StepContent from './StepContent';

const Onboarding: React.FC = () => {
  const {
    currentStep,
    form,
    steps,
    progress,
    nextStep,
    prevStep,
    updateForm,
    submitForm
  } = useOnboarding();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitForm = async () => {
    setIsLoading(true);
    await submitForm();
    setIsLoading(false);
  };

  const currentStepData = steps[currentStep - 1];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
      <ProgressBar progress={progress} />
      <StepIndicator currentStep={currentStep} totalSteps={steps.length} />
      
      <div 
        className="step-container w-full bg-white rounded-2xl shadow-lg p-6 md:p-8 transition-opacity duration-500 active"
      >
        <StepContent
          step={currentStepData}
          currentStep={currentStep}
          totalSteps={steps.length}
          form={form}
          updateForm={updateForm}
          submitForm={handleSubmitForm}
          nextStep={nextStep}
          prevStep={prevStep}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default Onboarding;