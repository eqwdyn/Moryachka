import type { FC } from "react";
import cl from "./BurgerSlide.module.css";
import { createPortal } from "react-dom";
import CloseIcon from "@assets/svg/close.svg?react";
import PhoneIcon from "@assets/svg/phone.svg?react";
// import ClockIcon from "@assets/svg/clock.svg?react";
import TgIcon from "@assets/svg/tg.svg?react";
import { useCategoriesDishes } from "../../../shared/hooks/useCategoriesDishes";
// import { Link } from "react-router-dom";
// import { ROUTES } from "@app/routes/routes";
import { MaxIcon } from "@shared/ui/MaxIcon";
import { YandexMap } from "@features/YandexMap";

interface Props {
  isOpen: boolean;
  closeHandle: () => void;
}

export const BurgerSlide: FC<Props> = ({ isOpen, closeHandle }) => {
  const { data: items, isLoading, error } = useCategoriesDishes();

  if (isLoading) return <></>;

  if (error) {
    console.error("Ошибка загрузки категорий:", error);
    return <></>;
  }

  if (!items || items.length === 0) return null;

  return createPortal(
    <section
      aria-hidden={!isOpen}
      className={cl.container}
      inert={!isOpen}
      onClick={closeHandle}
    >
      <div className={cl.content} onClick={(e) => e.stopPropagation()}>
        <header className={cl.header}>
          {/* <div className={cl.workHours}>
            <ClockIcon className={cl.clockIcon} />
            <div className={cl.workHoursText}>
              <span>ежедневно</span>
              <span>09:00–04:00</span>
            </div>
          </div> */}
          <button
            className={cl.closeBtn}
            onClick={closeHandle}
            disabled={!isOpen}
          >
            <CloseIcon />
          </button>
        </header>
        <div className={cl.body}>
          <div className={cl.topSide}>
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
          </div>

          <div className={cl.bottomSide}>
            <address className={cl.contacts}>
              <div className={cl.contact}>
                <TgIcon className={cl.tgIcon} />
                <a
                  aria-label="Ссылка на соцсеть организации: https://t.me/s/cafee_bar"
                  href="https://t.me/s/cafee_bar"
                  className={cl.link}
                  target="_blank"
                >
                  cafee_bar
                </a>
              </div>
              <div className={cl.contact}>
                <PhoneIcon style={{ color: "#00C33A" }} />
                <a href="tel:+79780017089" className={cl.link} target="_blank">
                  +7 (978) 001-70-89
                </a>
              </div>
              <div className={cl.contact}>
                <MaxIcon idPrefix="BurgerSlide" />
                <span>+7 (978) 001-70-89</span>
              </div>
            </address>
            <YandexMap style={{ width: 220, height: 220 }} />
          </div>
        </div>
      </div>
    </section>,
    document.body,
  );
};
