const isProduction: boolean = process.env.NODE_ENV === "production";

export const API_BASE_URL = isProduction
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export const apiRoutes = {
  products: `${API_BASE_URL}/api/product`,
  search: `${API_BASE_URL}/api/search`,
};
