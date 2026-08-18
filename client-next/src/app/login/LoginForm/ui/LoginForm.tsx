"use client";

import { useActionState } from "react";
import cl from "./LoginForm.module.css";
import { Show } from "@/shared/ui/Show";
import { LoginAction } from "@/app/actions/login.action";

export const LoginForm = () => {
  const [actionState, formAction, isPending] = useActionState(LoginAction, {
    success: false,
    message: "Was not called",
  });

  const isKnownError =
    actionState.message === "Uncorrect Data" ||
    actionState.message === "Server Error" ||
    actionState.message === "Network Error";

  const isUnknownError =
    !isKnownError && actionState.message !== "Was not called";
  return (
    <form className={cl.form} action={formAction}>
      <div className={cl.item}>
        <label htmlFor="login" className={cl.label}>
          Имя пользователя
        </label>
        <input
          type="text"
          className={cl.input}
          name="login"
          id="login"
          required={true}
        />
      </div>
      <div className={cl.item}>
        <label htmlFor="password" className={cl.label}>
          Пароль
        </label>
        <input
          type="password"
          className={cl.input}
          name="password"
          id="password"
          required={true}
        />
      </div>
      <Show when={actionState.message === "Uncorrect Data"}>
        <p className={cl.errorLabel}>
          Ошибка на стороне клиента, проверьте данные
        </p>
      </Show>
      <Show when={actionState.message === "Server Error"}>
        <p className={cl.errorLabel}>Ошибка на стороне сервера</p>
      </Show>
      <Show when={actionState.message === "Network Error"}>
        <p className={cl.errorLabel}>
          Ошибка соединения, проверьте подключение к интернету
        </p>
      </Show>
      <Show when={isUnknownError}>
        <p className={cl.errorLabel}>Неизвестная ошибка</p>
      </Show>
      <button className={cl.btn} disabled={isPending}>
        Войти
      </button>
    </form>
  );
};
