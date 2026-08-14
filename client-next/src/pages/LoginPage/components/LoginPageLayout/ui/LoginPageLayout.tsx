import { LoginForm } from "@/pages/LoginPage/components/LoginForm";
import cl from "./LoginPageLayout.module.css";
import Image from "next/image";

export const LoginPageLayout = () => {
  return (
    <div className={cl.container}>
      <Image
        src="/images/logo.webp"
        alt=""
        width={100}
        height={100}
        loading="eager"
      />
      <LoginForm />
    </div>
  );
};
