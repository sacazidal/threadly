export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const usernameRegex = /^[A-Za-zА-Яа-я\s'-]{2,25}$/;
export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
export const codeRegex = /^\d{6}$/;
