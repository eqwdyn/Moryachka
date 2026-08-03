import { useRef, type FC } from "react";
import cl from "./SearchBar.module.css";
import SearchIcon from "@assets/svg/search.svg?react";

interface Props {
  value: string;
  setValue: (text: string) => void;
  placeholder?: string;
  iconColor?: "black" | "white";
}

export const SearchBar: FC<Props> = ({
  value,
  setValue,
  placeholder,
  iconColor = "black",
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={cl.container}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <button
        className={cl.button}
        onClick={() => {
          inputRef.current?.focus();
        }}
        aria-label="Перейти к поиску"
      >
        <SearchIcon
          className={iconColor === "black" ? cl.blackIcon : cl.whiteIcon}
        />
      </button>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={cl.input}
        placeholder={placeholder ? placeholder : undefined}
        ref={inputRef}
        name="searchBar"
      />
    </div>
  );
};
