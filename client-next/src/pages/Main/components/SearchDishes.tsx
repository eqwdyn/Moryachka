import { useSearchStore } from "@/pages/Main/store/search.store";
import { SearchBar } from "@/shared/ui/SearchBar";
import { FC } from "react";

interface Props {
  сolor?: "white" | "black";
}

export const SearchDishes: FC<Props> = ({ сolor }) => {
  const { query, setQuery } = useSearchStore();

  return (
    <SearchBar
      value={query}
      setValue={setQuery}
      placeholder="Поиск блюд"
      searchColor={сolor}
    />
  );
};
