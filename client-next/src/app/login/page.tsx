import cl from "./page.module.css";
import Image from "next/image";
import { LoginForm } from "@/app/login/LoginForm";

// export const dynamic = "force-dynamic";

export default function Login() {
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
}
