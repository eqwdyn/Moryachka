import cl from "./BackFallDishes.module.css";

export const BackFallDishes = () => {
  return (
    <div className={cl.container}>
      <img
        src="/images/backfall-dishes.png"
        className={cl.image}
        loading="lazy"
        alt=""
      />
      <div className={cl.text}>
        <span className={cl.span}>Таких блюд нет.</span>
        <span className={cl.span}>Попробуйте написать по‑другому.</span>
      </div>
    </div>
  );
};
