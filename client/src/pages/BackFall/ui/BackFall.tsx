import { ContentContainer } from "@shared/ui/ContentContainer";
import cl from "./BackFall.module.css";
import { Header } from "@widgets/Header";
import { Link } from "react-router-dom";

export const BackFall = () => {
  return (
    <>
      <div className={cl.headerWrapper}>
        <Header />
      </div>
      <ContentContainer>
        <section className={cl.content}>
          <img src="/images/404.png" loading="lazy" className={cl.img} />
          <span className={cl.text}>Страница не найдена!</span>
          <Link className={cl.link} to="/">
            На главную
          </Link>
        </section>
      </ContentContainer>
    </>
  );
};
