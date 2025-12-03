import axios from "axios";

// Load base URL from .env
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!; // Non-null assertion since no fallback

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Send onboarding form
export const sendOnboardingForm = async (data: {
  name: string;
  email: string;
  contact: string;
  country: string;
}) => {
  const res = await api.post("/api/portfolio/form/submit/", data);
  return res.data;
};

export default api;
