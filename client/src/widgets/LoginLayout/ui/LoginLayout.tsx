import { Header } from "@widgets/Header";
import cl from "./LoginLayout.module.css";
import { LoginForm } from "@features/LoginForm";

export const LoginLayout = () => {
  return (
    <>
      <div className={cl.headerWrapper}>
        <Header />
      </div>
      <div className={cl.container}>
        <img
          src="/images/logo.webp"
          alt=""
          width={100}
          height={100}
          loading="lazy"
        />
        <LoginForm />
      </div>
    </>
  );
};
