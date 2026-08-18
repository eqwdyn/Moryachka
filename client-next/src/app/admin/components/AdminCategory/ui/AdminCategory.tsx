import { useRef, useState, type FC } from "react";
import cl from "./AdminCategory.module.css";
import { CategoryWithDishes } from "@/entities/Category.ent";
import Image from "next/image";
import { DeleteButton } from "../components/DeleteButton";
import {
  useDeleteCategory,
  useUpdateCategory,
} from "@/app/admin/hooks/CategoryMutations";
import { Dish } from "@/entities/Dish.ent";
import { AdminDishItem } from "@/app/admin/components/AdminDishItem";
import { AddDishItem } from "@/app/admin/components/AddDishItem";
import { useAddDishStore } from "@/app/admin/store/AddDishModal.store";

interface Props {
  item: CategoryWithDishes;
  dishesImageLoading: "eager" | "lazy";
  token: string;
}

export const AdminCategory: FC<Props> = ({
  item,
  dishesImageLoading,
  token,
}) => {
  const [value, setValue] = useState<string>(item.title);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { mutateAsync: UpdateCategory, isPending } = useUpdateCategory();
  const { mutateAsync: DeleteCategory } = useDeleteCategory();

  const updateHandle = async () => {
    if (!value.trim()) return;
    if (value.trim() === item.title.trim()) return;

    console.log("Update request!");
    try {
      await UpdateCategory({ id: item.id, title: value, token });
    } catch (e) {
      console.error("Update error: ", e);
      alert("Ошибка при обновлении категории");
      setValue(item.title);
    }
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputRef.current?.blur();

    await updateHandle();
  };

  const deleteHanlde = async () => {
    const isConfirmed = confirm(
      `Вы уверены что хотите удалить Категорию ${value}?`,
    );
    if (!isConfirmed) return;

    console.log("Delete request!");
    try {
      await DeleteCategory({ id: item.id, token });
    } catch (e) {
      console.error("Delete error: ", e);
      alert("Ошибка при удалении категории");
    }
  };

  return (
    <article className={cl.container} data-category-id={item.id}>
      <form onSubmit={handleSubmit} className={cl.form}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={inputRef}
          className={cl.input}
          placeholder="Название категории"
          autoComplete="off"
          id={`CategoryNameInput-${item.id}`}
        />
        <label
          htmlFor={`CategoryNameInput-${item.id}`}
          className={`${cl.adminButton} ${cl.redactButton}`}
        >
          {/* <RedactIcon /> */}
          <Image
            src="/svg/redact.svg"
            alt="Изменить"
            width={25}
            height={25}
            loading="eager"
          />
        </label>
        <button
          type="submit"
          disabled={isPending}
          className={`${cl.saveButton} ${cl.button}`}
        >
          {isPending ? (
            // <Loader />
            <p>Загрузка ...</p>
          ) : (
            <Image
              src="/svg/check-mark.svg"
              width={25}
              height={25}
              alt="Сохранить"
              loading="eager"
            />
          )}
        </button>
        <DeleteButton deleteHandle={deleteHanlde} className={cl.deleteButton} />
      </form>

      <AdminDishesList
        items={item.dishes}
        imageLoading={dishesImageLoading}
        token={token}
        categoryId={item.id}
      />
    </article>
  );
};

interface AdminDishesList {
  items: Dish[];
  imageLoading: "eager" | "lazy";
  token: string;
  categoryId: number;
}

const AdminDishesList: FC<AdminDishesList> = ({
  items,
  imageLoading,
  token,
  categoryId,
}) => {
  const { open } = useAddDishStore();

  return (
    <ul className={cl.list}>
      {items.map((item) => (
        <li className={cl.item} key={item.id}>
          <AdminDishItem
            item={item}
            imageLoading={imageLoading}
            token={token}
          />
        </li>
      ))}
      <AddDishItem openModalHandle={() => open(categoryId)} />
    </ul>
  );
};
