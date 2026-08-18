"use client";

import { useRef, useState, type FC } from "react";
import cl from "./CreateCategoryModal.module.css";
import { useCreateCategory } from "@/app/admin/hooks/CategoryMutations";
import { Modal } from "@/shared/ui/Modal";
import { useAddCategoryStore } from "@/app/admin/store/AddCategoryModal.store";

interface Props {
  token: string;
}

export const CreateCategoryModal: FC<Props> = ({ token }) => {
  const { close, isOpen } = useAddCategoryStore();
  const { mutateAsync: CreateCategory } = useCreateCategory();
  const [value, setValue] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  const closeHandle = () => {
    close();
    setValue("");
  };

  const submitHandle = async (e: any) => {
    e.preventDefault();

    if (!token) {
      return;
    }

    try {
      await CreateCategory({ title: value, token });
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

  return (
    <Modal isOpen={isOpen} closeModal={closeHandle}>
      <form className={cl.form} onSubmit={submitHandle} ref={formRef}>
        <h2 className={cl.title}>Создание категории</h2>
        <div className={cl.item}>
          <label htmlFor="CategoryNameCreateModal" className={cl.label}>
            Название
          </label>
          <input
            className={cl.input}
            id="CategoryNameCreateModal"
            name="title"
            required={true}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        {token ? (
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
        ) : (
          <p>Нет доступа к админ модалке</p>
        )}
      </form>
    </Modal>
  );
};
