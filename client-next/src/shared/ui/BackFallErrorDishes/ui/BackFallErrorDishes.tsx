import cl from "./BackFallErrorDishes.module.css";

export const BackFallErrorDishes = () => {
  return (
    <div className={cl.container}>
      <img
        src="/images/backfall-dishes.png"
        className={cl.image}
        loading="lazy"
        alt=""
      />
      <div className={cl.text}>
        <span className={cl.span}>Произошла ошибка.</span>
        <span className={cl.span}>Попробуйте повторить позже.</span>
      </div>
    </div>
  );
};
