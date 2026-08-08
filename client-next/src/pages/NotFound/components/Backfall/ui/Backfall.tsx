import cl from "./Backfall.module.css";
import Image from "next/image";
import Link from "next/link";

export const Backfall = ({}) => {
  return (
    <div className={cl.container}>
      <Image
        src="/images/404.png"
        alt="Ошибка 404"
        className={cl.img}
        width={500}
        height={500}
        loading="eager"
      />
      <span className={cl.text}>Страница не найдена!</span>
      <Link className={cl.link} href="/">
        На главную
      </Link>
    </div>
  );
};
