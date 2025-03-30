"use client";

import { SwitchFormProps } from "@/types";
import { useState } from "react";
import { validationLog } from "@/utils/validation";
import { apiRoutes } from "@/lib/api";
import AuthForm from "./AuthForm";
import FieldForm from "./FieldForm";

const LoginForm = ({ onSwitch, onRecovery }: SwitchFormProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validationLog(email, password);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch(apiRoutes.login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Ошибка авторизации");
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
      title="Вход"
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
      action="Войти"
      secondAction="Входим..."
      footerText={
        <div className="text-center text-xs md:text-sm">
          У вас еще нет аккаунта?{" "}
          <button
            onClick={onSwitch}
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
      <FieldForm
        label="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        id="password"
        recovery={
          <button
            type="button"
            onClick={onRecovery}
            className="ml-auto underline-offset-4 hover:underline text-xs md:text-sm"
          >
            Забыли пароль?
          </button>
        }
      />
    </AuthForm>
  );
};

export default LoginForm;
