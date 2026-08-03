import { useRef, useState, type FC } from "react";
import cl from "./AdminCategory.module.css";
import type { Category as CategoryEnt } from "@entities/Category.ent";
import type { Dish } from "@entities/Dish.ent";
import { DishesList } from "@shared/ui/DishesList";
import RedactIcon from "@assets/svg/redact.svg?react";
import DeleteIcon from "@assets/svg/delete.svg?react";
import SaveIcon from "@assets/svg/check-mark.svg?react";
import {
  useDeleteCategory,
  useUpdateCategory,
} from "@shared/hooks/CategoryMutations";
import { Loader } from "@widgets/Loader";

interface Props {
  item: CategoryEnt;
  dishes: Dish[];
  openCreateDishModalHandle: () => void;
  openRedactDishModal: (dish: Dish) => void;
}

export const AdminCategory: FC<Props> = ({
  item,
  dishes,
  openCreateDishModalHandle,
  openRedactDishModal,
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
      await UpdateCategory({ id: item.id, title: value });
    } catch (e) {
      console.error("Update error: ", e);
      alert("Ошибка при обновлении категории");
      setValue(item.title);
    }
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    await updateHandle();
  };

  const deleteHanlde = async () => {
    const isConfirmed = confirm(
      `Вы уверены что хотите удалить Категорию ${value}?`,
    );
    if (!isConfirmed) return;

    console.log("Delete request!");
    try {
      await DeleteCategory(item.id);
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
          <RedactIcon />
        </label>
        <button
          type="submit"
          disabled={isPending || !value.trim() || value === item.title}
          className={`${cl.adminButton} ${cl.saveButton}`}
        >
          {isPending ? <Loader /> : <SaveIcon />}
        </button>
        <button
          type="button"
          className={`${cl.adminButton} ${cl.deleteButton}`}
          onClick={deleteHanlde}
        >
          <DeleteIcon />
        </button>
      </form>

      <DishesList
        items={dishes}
        type="admin"
        openCreateDishModalHandle={openCreateDishModalHandle}
        openRedactDishModal={openRedactDishModal}
      />
    </article>
  );
};
