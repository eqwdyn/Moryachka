import cl from "./Header.module.css";
import { BurgerSlide } from "@widgets/BurgerSlide";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@assets/svg/burger-icon.svg?react";
import PhoneIcon from "@assets/svg/phone.svg?react";
// import { ROUTES } from "@app/routes/routes";
import { MaxIcon } from "@shared/ui/MaxIcon";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header>
      <div className={cl.headerContent}>
        <Link className={cl.logoWrapper} to="/">
          <img
            src="/images/logo.webp"
            className={cl.logo}
            alt=""
            loading="lazy"
          />
          <h1 className={cl.title}>Морячка</h1>
        </Link>
        <div className={cl.rightSide}>
          <div className={cl.desctop}>
            {/* <nav className={cl.navigation}>
              <Link to="/" className={cl.link}>
                Главная
              </Link>
              <Link to={ROUTES.aboutUs} className={cl.link}>
                О нас
              </Link>
              <Link to={ROUTES.adminPanel} className={cl.link}>
                Admin Panel
              </Link>
              <Link to={ROUTES.login} className={cl.link}>
                Admin Login
              </Link>
            </nav> */}
            <address className={cl.contacts}>
              <div className={cl.contact}>
                <PhoneIcon style={{ color: "#00C33A" }} />
                <a href="tel:+79780017089" className={cl.link}>
                  +7 (978) 001-70-89
                </a>
              </div>
              <div className={cl.contact}>
                <MaxIcon idPrefix="Header" />
                <span>+7 (978) 001-70-89</span>
              </div>
            </address>
          </div>
          <div className={cl.mobile}>
            <button
              className={cl.menuButton}
              onClick={() => {
                setIsOpen(true);
              }}
              aria-label="Открыть бургер меню"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>

      <BurgerSlide
        isOpen={isOpen}
        closeHandle={() => {
          setIsOpen(false);
        }}
      />
    </header>
  );
};
