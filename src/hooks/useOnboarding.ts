import { useState } from 'react';
import { FormData, Step } from '@/components/types';

const stepsData: Step[] = [
  {
    title: "Welcome to Grocery Money Program",
    content: "<p class='text-lg'>Earn money with grocery partnerships! We handle account management tasks for you. Let's guide you through how it works.</p>",
    type: "info",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2316a34a'%3E%3Cpath d='M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 5.5V7H9V5.5L3 7V9L9 10.5V12.5L3 14V16L9 17.5V22H15V17.5L21 16V14L15 12.5V10.5L21 9Z'%3E%3C/path%3E%3C/svg%3E"
  },
  {
    title: "How It Works",
    content: `
      <ul class="space-y-3 text-left">
        <li class="flex items-start">
          <i class="fas fa-user-plus text-green-600 mt-1 mr-3"></i>
          <span>Join our partnership program</span>
        </li>
        <li class="flex items-start">
          <i class="fas fa-tasks text-green-600 mt-1 mr-3"></i>
          <span>We handle account management tasks for you</span>
        </li>
        <li class="flex items-start">
          <i class="fas fa-money-bill-wave text-green-600 mt-1 mr-3"></i>
          <span>Earn money effortlessly</span>
        </li>
      </ul>`,
    type: "info",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2316a34a'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'%3E%3C/path%3E%3C/svg%3E"
  },
  {
    title: "Why Join?",
    content: `
      <ul class="space-y-3 text-left">
        <li class="flex items-start">
          <i class="fas fa-smile text-green-600 mt-1 mr-3"></i>
          <span>Hassle-free earnings with minimal effort</span>
        </li>
        <li class="flex items-start">
          <i class="fas fa-headset text-green-600 mt-1 mr-3"></i>
          <span>Dedicated support from our expert team</span>
        </li>
        <li class="flex items-start">
          <i class="fas fa-rocket text-green-600 mt-1 mr-3"></i>
          <span>Quick and simple onboarding process</span>
        </li>
        <li class="flex items-start">
          <i class="fas fa-shield-alt text-green-600 mt-1 mr-3"></i>
          <span>Secure and reliable payment system</span>
        </li>
      </ul>`,
    type: "info",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2316a34a'%3E%3Cpath d='M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11H15V13H12V16H10V13H7V11H10V8H12V11Z'%3E%3C/path%3E%3C/svg%3E"
  },
  {
    title: "Join the Program",
    content: "<p class='text-lg'>Fill out your info below and select your country to get started with our partnership program!</p>",
    type: "form",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2316a34a'%3E%3Cpath d='M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z'%3E%3C/path%3E%3C/svg%3E"
  },
  {
    title: "Thank You!",
    content: "<p class='text-lg mb-4'>We've received your information. Our team will contact you shortly to guide you through the next steps.</p><p class='mb-2'>Get ready to start earning with our partnership program!</p>",
    type: "thankyou",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2316a34a'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'%3E%3C/path%3E%3C/svg%3E"
  }
];

export const useOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    contact: '',
    country: ''
  });

  const steps = stepsData;

  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateForm = (field: keyof FormData, value: string) => {
    setForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const submitForm = async () => {
    // In a real implementation, this would connect to a backend API
    console.log("Form submitted:", form);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    nextStep();
  };

  return {
    currentStep,
    form,
    steps,
    progress,
    nextStep,
    prevStep,
    updateForm,
    submitForm
  };
};