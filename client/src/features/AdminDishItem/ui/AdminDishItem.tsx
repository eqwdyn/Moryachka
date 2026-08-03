import type { FC } from "react";
import cl from "./AdminDishItem.module.css";
import type { Dish } from "@entities/Dish.ent";
// import { STATIC_URL } from "@shared/api/urls";
import RedactIcon from "@assets/svg/redact.svg?react";
import DeleteIcon from "@assets/svg/delete.svg?react";
import { useDeleteDish } from "@shared/hooks/DishesMutations";

interface Props {
  item: Dish;
  openRedactModal: (dish: Dish) => void;
}

export const AdminDishItem: FC<Props> = ({ item, openRedactModal }) => {
  const { mutate: DeleteDish } = useDeleteDish();

  const trimmedDesc = item.description.trim();
  const descFromUpperCase =
    trimmedDesc.slice(0, 1).toUpperCase() + trimmedDesc.slice(1);

  const cuttedDesc =
    descFromUpperCase.length > 30
      ? descFromUpperCase.slice(0, 30) + "..."
      : descFromUpperCase;

  const redactHandle = () => {
    openRedactModal(item);
  };
  const deleteHanlde = async () => {
    const isConfirmed = confirm(
      `Вы уверены что хотите удалить Блюдо ${item.title}?`,
    );
    if (!isConfirmed) return;

    console.log("Delete request!");
    DeleteDish(item.id);
  };
  return (
    <div className={cl.item}>
      <img
        // src={`${STATIC_URL}/${item.image_url}`}
        src={item.image_url}
        className={cl.image}
        loading="lazy"
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
        <div className={cl.adminButtons}>
          <button
            className={`${cl.adminButton} ${cl.redactButton}`}
            onClick={redactHandle}
          >
            <RedactIcon />
          </button>
          <button
            className={`${cl.adminButton} ${cl.deleteButton}`}
            onClick={deleteHanlde}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
