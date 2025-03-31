const isProduction = process.env.NODE_ENV === "production";

export const API_BASE_URL = isProduction
  ? `https://threadly-three.vercel.app`
  : "http://localhost:3000";

export const apiRoutes = {
  product: `${API_BASE_URL}/api/product`,
  search: `${API_BASE_URL}/api/search`,
  sendEmail: `${API_BASE_URL}/api/send-email`,
  login: `${API_BASE_URL}/api/login`,
  signup: `${API_BASE_URL}/api/signup`,
  recovery: `${API_BASE_URL}/api/recovery`,
  recoveryСode: `${API_BASE_URL}/api/recovery-code`,
  changePassword: `${API_BASE_URL}/api/change-password`,
};
