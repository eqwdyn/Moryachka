import type { FC } from "react";
import cl from "./DishItem.module.css";
import Image from "next/image";
import { Dish } from "@/entities/Dish.ent";

interface Props {
  item: Dish;
  imageLoading: "eager" | "lazy";
}

export const DishItem: FC<Props> = ({ item, imageLoading }) => {
  const trimmedDesc = item.description.trim();
  const descFromUpperCase =
    trimmedDesc.slice(0, 1).toUpperCase() + trimmedDesc.slice(1);

  const cuttedDesc =
    descFromUpperCase.length > 30
      ? descFromUpperCase.slice(0, 30) + "..."
      : descFromUpperCase;
  return (
    <div className={cl.item}>
      <Image
        src={item.image_url}
        className={cl.image}
        alt={item.title}
        width={250}
        height={250}
        loading={imageLoading}
      />
      <div className={cl.body}>
        <div className={cl.titleCount}>
          <h3 className={cl.title}>{item.title}</h3>
          <span className={cl.count}>{item.count}</span>
        </div>
        {trimmedDesc && <p className={cl.description}>{cuttedDesc}</p>}

        <span className={cl.price}>{item.price} &#8381;</span>
      </div>
    </div>
  );
};
