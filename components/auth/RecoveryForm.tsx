"use client";

import { apiRoutes } from "@/lib/api";
import { validationRecovery } from "@/utils/validation";
import { useState } from "react";
import FieldForm from "./FieldForm";
import AuthForm from "./AuthForm";
import { SwitchFormProps } from "@/types";

const RecoveryForm = ({ onBackToLogin, onBackToSignUp }: SwitchFormProps) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

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
        throw new Error("Ошибка авторизации");
      }
    } catch (error) {
      console.error(error);
      setError("Ошибка сервера");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthForm
      title="Восстановление пароля"
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
      action="Восстановить"
      secondAction="Восстанавливаем..."
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
      <FieldForm
        label="Почта"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        id="email"
        placeholder="eye@example.com"
      />
    </AuthForm>
  );
};
export default RecoveryForm;
