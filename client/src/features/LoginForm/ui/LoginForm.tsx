import { useNavigate } from "react-router-dom";
import { AuthRepo } from "../../../shared/api/Auth.repo";
import cl from "./LoginForm.module.css";
import { useState } from "react";
import { ROUTES } from "@app/routes/routes";
import { useAuthContext } from "@app/providers/AuthContext";

export const LoginForm = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userError, setUserError] = useState<boolean>(false);
  const [serverError, setServerError] = useState<boolean>(false);
  const [networkError, setNetworkError] = useState<boolean>(false);
  const { setIsAdmin } = useAuthContext();
  const navigate = useNavigate();

  const clearErrors = () => {
    setUserError(false);
    setServerError(false);
    setNetworkError(false);
  };

  const authHandle = async (e: any) => {
    e.preventDefault();
    clearErrors();

    if (!login.trim().length || !password.trim().length) {
      return;
    }

    try {
      await AuthRepo.setAccessTokenFromLoginResp({
        login,
        password,
      });

      console.log("Acc");
      setIsAdmin(true);
      navigate(ROUTES.adminPanel);
    } catch (e: any) {
      console.log(JSON.stringify(e, null, 2));
      if (e.status >= 500) {
        setServerError(true);
      } else if (e.status < 500) {
        setUserError(true);
      } else if (e.message === "Network Error") {
        setNetworkError(true);
      }
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
      {userError && (
        <p className={cl.errorLabel}>
          Ошибка на стороне клиента, проверьте данные
        </p>
      )}
      {networkError && (
        <p className={cl.errorLabel}>Ошибка соединения с сервером.</p>
      )}
      {serverError && (
        <p className={cl.errorLabel}>Ошибка на стороне сервера</p>
      )}
      <button className={cl.btn}>Войти</button>
    </form>
  );
};
