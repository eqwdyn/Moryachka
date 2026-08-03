import type { FC } from "react";
import cl from "./DishItem.module.css";
import type { Dish } from "@entities/Dish.ent";
// import { STATIC_URL } from "@shared/api/urls";

interface Props {
  item: Dish;
}

export const DishItem: FC<Props> = ({ item }) => {
  const trimmedDesc = item.description.trim();
  const descFromUpperCase =
    trimmedDesc.slice(0, 1).toUpperCase() + trimmedDesc.slice(1);

  const cuttedDesc =
    descFromUpperCase.length > 30
      ? descFromUpperCase.slice(0, 30) + "..."
      : descFromUpperCase;
  return (
    <div className={cl.item}>
      <img
        // src={`${STATIC_URL}/${item.image_url}`}
        src={item.image_url}
        className={cl.image}
        loading="lazy"
        alt={item.title}
      />
      <div className={cl.body}>
        <div className={cl.titleCount}>
          <h3 className={cl.title}>{item.title}</h3>
          {item.count.trim().length && (
            <span className={cl.count}>{item.count}</span>
          )}
        </div>
        {trimmedDesc && <p className={cl.description}>{cuttedDesc}</p>}

        <span className={cl.price}>{item.price} &#8381;</span>
      </div>
    </div>
  );
};
