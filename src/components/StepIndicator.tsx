interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-40">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div 
          key={index}
          className={`step-dot w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors ${
            currentStep === index + 1 
              ? 'bg-green-600' 
              : currentStep > index + 1 
                ? 'bg-green-600' 
                : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export default StepIndicator;