import Link from "next/link";
import cl from "./Header.module.css";
import Image from "next/image";
import { BurgerButton } from "@/shared/ui/Header/components/BurgerButton";

export const Header = () => {
  return (
    <header className={cl.header}>
      <div className={cl.headerContent}>
        <Link className={cl.logoWrapper} href="/">
          <Image src="/images/logo.webp" alt="" width={45} height={45} />
          <h1 className={cl.title}>Кафе Морячка</h1>
        </Link>
        <div className={cl.rightSide}>
          <div className={cl.desctop}>
            {/* <nav className={cl.navigation}>
              <Link href="/" className={cl.link}>
                Главная
              </Link>
              <Link href={""} className={cl.link}>
                О нас
              </Link>
              <Link href={ROUTES.adminPanel} className={cl.link}>
                Admin Panel
              </Link>
              <Link href={ROUTES.login} className={cl.link}>
                Admin Login
              </Link>
            </nav> */}
            <address className={cl.contacts}>
              <a href="tel:+79780017089" className={cl.contact}>
                <Image src={"/svg/phone.svg"} alt="" width={16} height={16} />
                <span>+7 (978) 001-70-89</span>
              </a>
              <div className={cl.contact}>
                <Image src={"/svg/max.svg"} alt="" width={16} height={16} />
                <span>+7 (978) 001-70-89</span>
              </div>
            </address>
          </div>
          <div className={cl.mobile}>
            <BurgerButton />
          </div>
        </div>
      </div>
    </header>
  );
};
