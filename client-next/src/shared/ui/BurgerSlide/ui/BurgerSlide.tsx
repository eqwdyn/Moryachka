"use client";

import cl from "./BurgerSlide.module.css";
import Image from "next/image";
import { useBurgerStore } from "@/shared/store/burger.store";
import Link from "next/link";

export const BurgerSlide = () => {
  const { isOpen, close } = useBurgerStore();
  return (
    <section
      aria-hidden={!isOpen}
      className={cl.container}
      inert={!isOpen}
      onClick={close}
    >
      <div className={cl.content} onClick={(e) => e.stopPropagation()}>
        <header className={cl.header}>
          <button className={cl.closeBtn} onClick={close} disabled={!isOpen}>
            <Image
              src="/svg/close.svg"
              width={16}
              height={16}
              loading="lazy"
              alt=""
            />
          </button>
        </header>
        <div className={cl.body}>
          <div className={cl.topSide}>
            <nav className={cl.navigation}>
              <Link href="/" className={cl.link}>
                Главная
              </Link>
              <Link href="/about" className={cl.link}>
                О нас
              </Link>
            </nav>
          </div>

          <div className={cl.bottomSide}>
            <address className={cl.contacts}>
              <div className={cl.contact}>
                <Image
                  src="/svg/tg.svg"
                  width={16}
                  height={16}
                  loading="lazy"
                  alt=""
                />
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
                <Image
                  src="/svg/phone.svg"
                  width={16}
                  height={16}
                  loading="lazy"
                  alt=""
                />
                <a href="tel:+79780017089" className={cl.link} target="_blank">
                  +7 (978) 001-70-89
                </a>
              </div>
              <div className={cl.contact}>
                <Image
                  src="/svg/max.svg"
                  width={16}
                  height={16}
                  loading="lazy"
                  alt=""
                />
                <span>+7 (978) 001-70-89</span>
              </div>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};
