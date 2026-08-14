"use client";

import type { FC } from "react";
import { Dish } from "@/entities/Dish.ent";
import { useRedactDishStore } from "@/pages/Admin/store/RedactDishModal.store";
import { useDeleteDish } from "@/pages/Admin/hooks/DishesMutations";
import { DeleteButton } from "../components/DeleteButton";
import { RedactButton } from "../components/RedactButton";
import { DishItem } from "@/shared/ui/DishItem";
import cl from "./AdminDishItem.module.css";

interface Props {
  item: Dish;
  imageLoading: "eager" | "lazy";
  token: string;
}

export const AdminDishItem: FC<Props> = ({ item, imageLoading, token }) => {
  const { mutateAsync: DeleteDish } = useDeleteDish();
  const { open } = useRedactDishStore();

  const redactHandle = () => {
    open(item);
  };

  const deleteHanlde = async () => {
    const isConfirmed = confirm(
      `Вы уверены что хотите удалить Блюдо ${item.title}?`,
    );
    if (!isConfirmed) return;

    console.log("Delete request!");
    await DeleteDish({ id: item.id, token });
  };
  return (
    <DishItem
      item={item}
      imageLoading={imageLoading}
      footerSlot={
        <div className={cl.adminButtons}>
          <RedactButton redactHandle={redactHandle} />
          <DeleteButton deleteHandle={deleteHanlde} />
        </div>
      }
    />
  );
};
