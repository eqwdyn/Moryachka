"use client";

import { useRef, type FC } from "react";
import cl from "./RedactDishModal.module.css";
import { useUpdateDish } from "@/app/admin/hooks/DishesMutations";
import { useRedactDishStore } from "@/app/admin/store/RedactDishModal.store";
import { Modal } from "@/shared/ui/Modal";

interface Props {
  token: string;
}

export const RedactDishModal: FC<Props> = ({ token }) => {
  const { close, isOpen, curItem } = useRedactDishStore();
  const { mutateAsync: UpdateDish } = useUpdateDish();
  const formRef = useRef<HTMLFormElement>(null);

  const closeHandle = () => {
    close();
    formRef.current?.reset();
  };

  const submitHandle = async (e: any) => {
    e.preventDefault();
    if (!curItem) return;

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title")?.toString().trim();
    const count = formData.get("count")?.toString().trim();
    const price = Number(formData.get("price"));
    const description = formData.get("description")?.toString().trim();
    const imageFile = formData.get("image");

    const hasTitleChanged = title !== curItem.title;
    const hasCountChanged = count !== curItem.count;
    const hasPriceChanged = price !== curItem.price;
    const hasDescriptionChanged = description !== curItem.description;
    const hasImageChanged = imageFile instanceof File && imageFile.size > 0;

    if (
      !hasTitleChanged &&
      !hasCountChanged &&
      !hasPriceChanged &&
      !hasDescriptionChanged &&
      !hasImageChanged
    ) {
      console.log("Skiped: no changes");
      alert("Нет изменений");
      return;
    }

    try {
      console.log(imageFile);
      await UpdateDish({ id: curItem.id, formData, token });
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
        <h2 className={cl.title}>Изменение блюда</h2>
        <ul className={cl.items}>
          <li className={cl.item}>
            <label htmlFor="DishNameRedactModal" className={cl.label}>
              Название
            </label>
            <input
              className={cl.input}
              id="DishNameRedactModal"
              name="title"
              defaultValue={curItem?.title}
            />
          </li>
          <li className={cl.item}>
            <label htmlFor="DishCountRedactModal" className={cl.label}>
              Количество
            </label>
            <input
              className={cl.input}
              id="DishCountRedactModal"
              name="count"
              defaultValue={curItem?.count}
            />
          </li>
          <li className={cl.item}>
            <label htmlFor="DishPriceRedactModal" className={cl.label}>
              Цена
            </label>
            <input
              className={cl.input}
              id="DishPriceRedactModal"
              name="price"
              type="number"
              defaultValue={curItem?.price}
            />
          </li>
          <li className={cl.item}>
            <label htmlFor="DishDescriptionRedactModal" className={cl.label}>
              Состав / Описание
            </label>
            <textarea
              className={cl.textarea}
              id="DishDescriptionRedactModal"
              name="description"
              defaultValue={curItem?.description}
            />
          </li>
          <li className={cl.item}>
            <label htmlFor="DishImageRedactModal" className={cl.label}>
              Изображение
            </label>
            <input
              className={cl.imageInput}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              id="DishImageRedactModal"
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
            Сохранить
          </button>
        </div>
      </form>
    </Modal>
  );
};
