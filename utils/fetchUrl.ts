export const fetchUrlLogout =
  process.env.NODE_ENV === "production"
    ? "https://threadly-three.vercel.app/api/logout"
    : "http://localhost:3000/api/logout";

export const fetchUrlLogin =
  process.env.NODE_ENV === "production"
    ? "https://threadly-three.vercel.app/api/login"
    : "http://localhost:3000/api/login";

export const fetchUrlRegister =
  process.env.NODE_ENV === "production"
    ? "https://threadly-three.vercel.app/api/signup"
    : "http://localhost:3000/api/signup";

export const fetchUrlRecovery =
  process.env.NODE_ENV === "production"
    ? "https://threadly-three.vercel.app/api/recovery"
    : "http://localhost:3000/api/recovery";

export const fetchUrlSearch =
  process.env.VERCEL || process.env.NODE_ENV === "production"
    ? "https://threadly-three.vercel.app/api/search"
    : "http://localhost:3000/api/search";

export const fetchUrlById =
  process.env.VERCEL || process.env.NODE_ENV === "production"
    ? "https://threadly-three.vercel.app/api/product"
    : "http://localhost:3000/api/product";
