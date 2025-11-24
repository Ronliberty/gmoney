import { Step, FormData } from './types';
import FormStep from './FormStep';
import ThankYouStep from './ThankYouStep';

interface StepContentProps {
  step: Step;
  currentStep: number;
  totalSteps: number;
  form: FormData;
  updateForm: (field: keyof FormData, value: string) => void; // ✅ type-safe
  submitForm: () => void;
  nextStep: () => void;
  prevStep: () => void;
  isLoading?: boolean;
}

const StepContent: React.FC<StepContentProps> = ({
  step,
  currentStep,
  totalSteps,
  form,
  updateForm,
  submitForm,
  nextStep,
  prevStep,
  isLoading = false
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
      {/* Image/Icon Column */}
      <div className="flex-1 flex justify-center">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-green-100 flex items-center justify-center">
          <img 
            src={step.image} 
            alt={step.title} 
            className="w-32 h-32 md:w-40 md:h-40 object-contain"
          />
        </div>
      </div>
      
      {/* Text Content Column */}
      <div className="flex-1">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-green-700">{step.title}</h1>
        <div 
          className="text-lg mb-6" 
          dangerouslySetInnerHTML={{ __html: step.content }}
        />

        {/* Form Step */}
        {step.type === 'form' && (
          <FormStep 
            form={form}
            updateForm={updateForm}
            submitForm={submitForm}
            isLoading={isLoading}
          />
        )}

        {/* Navigation buttons */}
        <div className="flex mt-6 gap-4">
          {currentStep > 1 && (
            <button 
              onClick={prevStep}
              className="px-5 py-2 border border-green-600 text-green-700 rounded-lg hover:bg-green-50 transition flex items-center gap-2" 
            >
              <i className="fas fa-arrow-left"></i> Back
            </button>
          )}
          {currentStep < totalSteps && step.type !== 'form' && step.type !== 'thankyou' && (
            <button 
              onClick={nextStep}
              className="btn-primary text-white px-5 py-2 rounded-lg font-medium flex items-center gap-2" 
            >
              Next <i className="fas fa-arrow-right"></i>
            </button>
          )}
        </div>

        {/* Thank You Step */}
        {step.type === 'thankyou' && <ThankYouStep />}
      </div>
    </div>
  );
};

export default StepContent;
