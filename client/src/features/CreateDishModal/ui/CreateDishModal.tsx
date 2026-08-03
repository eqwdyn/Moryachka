import { Modal } from "@shared/ui/Modal";
import { useRef, type FC } from "react";
import cl from "./CreateDishModal.module.css";
import { useCreateDish } from "@shared/hooks/DishesMutations";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  categoryId: number;
}

export const CreateDishModal: FC<Props> = ({
  isOpen,
  setIsOpen,
  categoryId,
}) => {
  const { mutateAsync: CreateDish } = useCreateDish();
  const formRef = useRef<HTMLFormElement>(null);

  const closeHandle = () => {
    setIsOpen(false);
    formRef.current?.reset();
  };

  const submitHandle = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("category_id", categoryId.toString());

    try {
      await CreateDish(formData);
      closeHandle();
    } catch (e: any) {
      if (e.status >= 500) {
        alert("Произошла ошибка на стороне сервера");
      } else {
        alert("Произошла ошибка");
      }
      console.log(e.message);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files || files.length === 0) return;

    if (files.length > 1) {
      alert("Можно загрузить только одно изображение");
      e.target.value = "";
      return;
    }

    const file = files[0];

    if (!file.type.startsWith("image/")) {
      alert("Разрешены только изображения");
      e.target.value = "";
      return;
    }

    console.log("Выбрано изображение:", file);
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeHandle}>
      <form className={cl.form} onSubmit={submitHandle} ref={formRef}>
        <h2 className={cl.title}>Создание блюда</h2>
        <ul className={cl.items}>
          <li className={cl.item}>
            <label htmlFor="DishNameCreateModal" className={cl.label}>
              Название
            </label>
            <input
              className={cl.input}
              id="DishNameCreateModal"
              name="title"
              required={true}
            />
          </li>

          <li className={cl.item}>
            <label htmlFor="DishCountCreateModal" className={cl.label}>
              Количество
            </label>
            <input
              className={cl.input}
              id="DishCountCreateModal"
              required={true}
              name="count"
            />
          </li>
          <li className={cl.item}>
            <label htmlFor="DishPriceCreateModal" className={cl.label}>
              Цена
            </label>
            <input
              className={cl.input}
              id="DishPriceCreateModal"
              required={true}
              name="price"
              type="number"
            />
          </li>
          <li className={cl.item}>
            <label htmlFor="DishDescriptionCreateModal" className={cl.label}>
              Состав / Описание
            </label>
            <textarea
              className={cl.textarea}
              id="DishDescriptionCreateModal"
              name="description"
              required={true}
            />
          </li>
          <li className={cl.item}>
            <label htmlFor="DishImageCreateModal" className={cl.label}>
              Изображение
            </label>
            <input
              className={cl.imageInput}
              type="file"
              accept="image/*"
              required={true}
              onChange={handleFileChange}
              id="DishImageCreateModal"
              name="image"
            />
          </li>
        </ul>
        <div className={cl.buttons}>
          <button
            className={cl.button}
            type="button"
            onClick={closeHandle}
            disabled={!isOpen}
          >
            Отменить
          </button>
          <button className={cl.button} type="submit" disabled={!isOpen}>
            Создать
          </button>
        </div>
      </form>
    </Modal>
  );
};
