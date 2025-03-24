export const fetchUrlLogout =
  process.env.NODE_ENV === "production"
    ? "/api/logout"
    : "http://localhost:3000/api/logout";

export const fetchUrlLogin =
  process.env.NODE_ENV === "production"
    ? "/api/login"
    : "http://localhost:3000/api/login";

export const fetchUrlRegister =
  process.env.NODE_ENV === "production"
    ? "/api/signup"
    : "http://localhost:3000/api/signup";

export const fetchUrlRecovery =
  process.env.NODE_ENV === "production"
    ? "/api/recovery"
    : "http://localhost:3000/api/recovery";

export const fetchUrlSearch =
  process.env.NODE_ENV === "production"
    ? "/api/search"
    : "http://localhost:3000/api/search";

export const fetchUrlById =
  process.env.NODE_ENV === "production"
    ? "/api/product"
    : "http://localhost:3000/api/product";
