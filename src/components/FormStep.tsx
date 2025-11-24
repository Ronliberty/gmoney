import { FormData } from './types';

interface FormStepProps {
  form: FormData;
  updateForm: (field: keyof FormData, value: string) => void;
  submitForm: () => void;
  isLoading?: boolean;
}

const FormStep: React.FC<FormStepProps> = ({ form, updateForm, submitForm, isLoading = false }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      <div className="relative">
        <i className="fas fa-user absolute left-3 top-4 text-green-600"></i>
        <input 
          type="text" 
          value={form.name}
          onChange={(e) => updateForm('name', e.target.value)}
          placeholder="Full Name" 
          required 
          className="form-input w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      
      <div className="relative">
        <i className="fas fa-envelope absolute left-3 top-4 text-green-600"></i>
        <input 
          type="email" 
          value={form.email}
          onChange={(e) => updateForm('email', e.target.value)}
          placeholder="Email Address" 
          required 
          className="form-input w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      
      <div className="relative">
        <i className="fas fa-phone absolute left-3 top-4 text-green-600"></i>
        <input 
          type="text" 
          value={form.contact}
          onChange={(e) => updateForm('contact', e.target.value)}
          placeholder="Phone / Contact" 
          required 
          className="form-input w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      
      <div className="relative">
        <i className="fas fa-globe absolute left-3 top-4 text-green-600"></i>
        <select 
          value={form.country}
          onChange={(e) => updateForm('country', e.target.value)}
          required 
          className="form-input w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="" disabled>Select your country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          <option value="France">France</option>
          <option value="Spain">Spain</option>
          <option value="Italy">Italy</option>
          <option value="UK">UK</option>
          <option value="Mexico">Mexico</option>
          <option value="Argentina">Argentina</option>
          <option value="India">India</option>
        </select>
      </div>

      <button 
        type="submit" 
        disabled={isLoading}
        className="btn-primary text-white px-6 py-3 rounded-lg font-semibold mt-2 flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isLoading ? (
          <>
            <i className="fas fa-spinner fa-spin"></i> Processing...
          </>
        ) : (
          <>
            Submit <i className="fas fa-arrow-right"></i>
          </>
        )}
      </button>
    </form>
  );
};

export default FormStep;