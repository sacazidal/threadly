"use client";

import { apiRoutes } from "@/lib/api";
import {
  validateRecoveryCode,
  validationChangePassword,
  validationRecovery,
} from "@/utils/validation";
import { useState } from "react";
import FieldForm from "./FieldForm";
import AuthForm from "./AuthForm";
import { SwitchFormProps } from "@/types";

const RecoveryForm = ({ onBackToLogin, onBackToSignUp }: SwitchFormProps) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordTwo, setPasswordTwo] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validationRecovery(email);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch(apiRoutes.recovery, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Ошибка запроса");
      }

      setStep(2);
    } catch (error) {
      console.error(error);
      setError("Ошибка сервера");
    } finally {
      setLoading(false);
    }
  };

  const handleRecovery = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateRecoveryCode(code);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch(apiRoutes.recoveryСode, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, code }),
      });

      if (!response.ok) {
        throw new Error("Ошибка запроса");
      }

      setStep(3);
    } catch (error) {
      console.error(error);
      setError("Ошибка сервера");
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validationChangePassword(password, passwordTwo);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch(apiRoutes.changePassword, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code, password, passwordTwo }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Ошибка смены пароля");
      }

      onBackToLogin!();
    } catch (error) {
      console.error(error);
      setError("Ошибка сервера");
    } finally {
      setLoading(false);
    }
  };

  const getCurrentHandler = () => {
    switch (step) {
      case 1:
        return handleSubmit;
      case 2:
        return handleRecovery;
      case 3:
        return handleChangePassword;
      default:
        return handleSubmit;
    }
  };

  return (
    <AuthForm
      title="Восстановление пароля"
      onSubmit={getCurrentHandler()}
      loading={loading}
      error={error}
      action={
        step === 1
          ? "Получить код"
          : step === 2
          ? "Подтвердить код"
          : "Изменить пароль"
      }
      secondAction={
        step === 1
          ? "Отправляем..."
          : step === 2
          ? "Подтверждаем..."
          : "Изменяем..."
      }
      footerText={
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToLogin}
            className="underline underline-offset-4 cursor-pointer"
          >
            Войти
          </button>
          <button
            onClick={onBackToSignUp}
            className="underline underline-offset-4 cursor-pointer"
          >
            Зарегистрироваться
          </button>
        </div>
      }
    >
      {step === (1 && 2) && (
        <FieldForm
          label="Почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          placeholder="eye@example.com"
          disabled={step === (1 && 2)}
        />
      )}
      {step === 2 && (
        <FieldForm
          label="Шестизначный код"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          type="number"
          id="code"
          placeholder="123456"
          maxLength={6}
        />
      )}
      {step === 3 && (
        <>
          <FieldForm
            label="Новый пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="newPassword"
          />
          <FieldForm
            label="Повторите пароль"
            value={passwordTwo}
            onChange={(e) => setPasswordTwo(e.target.value)}
            type="password"
            id="newPasswordTwo"
          />
        </>
      )}
    </AuthForm>
  );
};
export default RecoveryForm;
