"use client";

import { useState } from "react";
import cl from "./LoginForm.module.css";
import { Show } from "@/shared/ui/Show";
import { loginAction } from "@/pages/Admin/action/login";

export const LoginForm = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userError, setUserError] = useState<boolean>(false);
  const [serverError, setServerError] = useState<boolean>(false);

  const clearErrors = () => {
    setUserError(false);
    setServerError(false);
  };

  const authHandle = async (e: any) => {
    e.preventDefault();
    clearErrors();

    if (!login.trim().length || !password.trim().length) {
      return;
    }

    setIsLoading(true);
    try {
      await loginAction({ login, password });
    } catch (e: any) {
      if (e.message === "Client Error") {
        setUserError(true);
        return;
      }

      setServerError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={cl.form} onSubmit={authHandle}>
      <div className={cl.item}>
        <label htmlFor="login" className={cl.label}>
          Имя пользователя
        </label>
        <input
          type="text"
          className={cl.input}
          name="login"
          id="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required={true}
        />
      </div>
      <div className={cl.item}>
        <label htmlFor="password" className={cl.label}>
          Пароль
        </label>
        <input
          type="text"
          className={cl.input}
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required={true}
        />
      </div>
      <Show when={!!userError}>
        <p className={cl.errorLabel}>
          Ошибка на стороне клиента, проверьте данные
        </p>
      </Show>
      <Show when={!!serverError}>
        <p className={cl.errorLabel}>Ошибка на стороне сервера</p>
      </Show>
      <button className={cl.btn} disabled={isLoading}>
        Войти
      </button>
    </form>
  );
};
