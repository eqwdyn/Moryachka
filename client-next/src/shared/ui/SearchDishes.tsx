import { SearchBar } from "@/shared/ui/SearchBar";
import { FC } from "react";

interface Props {
  сolor?: "white" | "black";
  value: string;
  setValue: (v: string) => void;
}

export const SearchDishes: FC<Props> = ({ сolor, value, setValue }) => {
  return (
    <SearchBar
      value={value}
      setValue={setValue}
      placeholder="Поиск блюд"
      searchColor={сolor}
    />
  );
};
