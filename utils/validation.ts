import { ERROR_MESSAGES } from "./errorMessages";
import { codeRegex, emailRegex, passwordRegex, usernameRegex } from "./regex";

export const validateEmail = (email: string | undefined): string | null => {
  if (!email) return ERROR_MESSAGES.EMAIL_REQUIRED;
  if (!emailRegex.test(email)) return ERROR_MESSAGES.EMAIL_INVALID;
  return null;
};

export const validateCode = (code: string | undefined): string | null => {
  if (!code) return ERROR_MESSAGES.CODE_REQUIRED;
  if (!codeRegex.test(code)) return ERROR_MESSAGES.CODE_INVALID;
  return null;
};

export const validateFirstName = (
  firstName: string | undefined
): string | null => {
  if (!firstName) return ERROR_MESSAGES.FIRSTNAME_REQUIRED;
  if (!usernameRegex.test(firstName)) return ERROR_MESSAGES.FIRSTNAME_INVALID;
  return null;
};

export const validateLastName = (
  lastName: string | undefined
): string | null => {
  if (!lastName) return ERROR_MESSAGES.LASTNAME_REQUIRED;
  if (!usernameRegex.test(lastName)) return ERROR_MESSAGES.LASTNAME_INVALID;
  return null;
};

export const validatePassword = (
  password: string | undefined
): string | null => {
  if (!password) return ERROR_MESSAGES.PASSWORD_REQUIRED;
  if (!passwordRegex.test(password)) return ERROR_MESSAGES.PASSWORD_INVALID;
  return null;
};

export const validatePasswordMatch = (
  password: string | undefined,
  passwordTwo: string | undefined
): string | null => {
  if (passwordTwo === undefined) return null;
  if (!passwordTwo) return ERROR_MESSAGES.PASSWORD_TWO_REQUIRED;
  if (password !== passwordTwo) return ERROR_MESSAGES.PASSWORDS_MISMATCH;
  return null;
};

export const validationReg = (
  email: string | undefined,
  firstName: string | undefined,
  lastName: string | undefined,
  password: string | undefined,
  passwordTwo?: string
): string | null => {
  const emailError = validateEmail(email);
  if (emailError) return emailError;

  const firstNameError = validateFirstName(firstName);
  if (firstNameError) return firstNameError;

  const lastNameError = validateFirstName(lastName);
  if (lastNameError) return lastNameError;

  const passwordError = validatePassword(password);
  if (passwordError) return passwordError;

  const passwordMatchError = validatePasswordMatch(password, passwordTwo);
  if (passwordMatchError) return passwordMatchError;

  return null;
};

export const validationLog = (
  email: string | undefined,
  password: string | undefined
): string | null => {
  const emailError = validateEmail(email);
  if (emailError) return emailError;

  const passwordError = validatePassword(password);
  if (passwordError) return passwordError;

  return null;
};

export const validationRecovery = (
  email: string | undefined
): string | null => {
  const emailError = validateEmail(email);
  if (emailError) return emailError;

  return null;
};

export const validateRecoveryCode = (
  code: string | undefined
): string | null => {
  const codeError = validateCode(code);
  if (codeError) return codeError;

  return null;
};

export const validationChangePassword = (
  password: string | undefined,
  passwordTwo: string | undefined
): string | null => {
  const passwordError = validatePassword(password);
  if (passwordError) return passwordError;

  const passwordMatchError = validatePasswordMatch(password, passwordTwo);
  if (passwordMatchError) return passwordMatchError;

  return null;
};
