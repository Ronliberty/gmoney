export interface FormData {
  name: string;
  email: string;
  contact: string;
  country: string;
}

export interface Step {
  title: string;
  content: string;
  type: 'info' | 'form' | 'thankyou';
  image: string;
}

export interface OnboardingState {
  currentStep: number;
  form: FormData;
  steps: Step[];
}