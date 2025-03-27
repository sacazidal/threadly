const isProduction = process.env.NODE_ENV === "production";

export const API_BASE_URL = isProduction
  ? `https://threadly-three.vercel.app`
  : "http://localhost:3001";

export const apiRoutes = {
  product: `${API_BASE_URL}/api/product`,
  search: `${API_BASE_URL}/api/search`,
  sendEmail: `${API_BASE_URL}/api/send-email`,
};
