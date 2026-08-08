"use client";

import { useRef, type FC } from "react";
import cl from "./SearchBar.module.css";
import Image from "next/image";

interface Props {
  value: string;
  setValue: (text: string) => void;
  placeholder?: string;
  searchColor?: "white" | "black";
}

export const SearchBar: FC<Props> = ({
  value,
  setValue,
  placeholder,
  searchColor = "black",
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={cl.container}>
      <button
        className={cl.button}
        onClick={() => {
          inputRef.current?.focus();
        }}
        aria-label="Перейти к поиску"
      >
        <Image
          src={
            searchColor === "white"
              ? "/svg/search-white.svg"
              : "/svg/search-black.svg"
          }
          alt=""
          width={20}
          height={20}
        />
      </button>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          color: searchColor,
        }}
        className={cl.input}
        placeholder={placeholder ? placeholder : undefined}
        ref={inputRef}
        name="searchBar"
      />
    </div>
  );
};
