import { Modal } from "../../../shared/ui/Modal";
import { useRef, useState, type FC } from "react";
import cl from "./CreateCategoryModal.module.css";
import { useCreateCategory } from "@shared/hooks/CategoryMutations";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreateCategoryModal: FC<Props> = ({ isOpen, setIsOpen }) => {
  const { mutateAsync: CreateCategory } = useCreateCategory();
  const formRef = useRef<HTMLFormElement>(null);
  const [value, setValue] = useState<string>("");

  const closeHandle = () => {
    setIsOpen(false);
    setValue("");
  };

  const submitHandle = async (e: any) => {
    e.preventDefault();

    try {
      await CreateCategory(value);
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
