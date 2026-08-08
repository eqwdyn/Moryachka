"use client";

import { useFilteredCategoriesDishes } from "@/pages/Main/hooks/useCategoriesDishes";
import { MainPageVM } from "@/pages/Main/MainPage.vm";
import { useSearchStore } from "@/pages/Main/store/search.store";
import { search } from "@/pages/Main/utils/search";
import { useMemo } from "react";

export const MainPage = () => {
  const { query } = useSearchStore();
  const { data, isError, isLoading } = useFilteredCategoriesDishes();

  const searchedItems = useMemo(() => {
    const items = search(query, data);
    return items;
  }, [data, query]);

  return (
    <MainPageVM items={searchedItems} isLoading={isLoading} isError={isError} />
  );
};
