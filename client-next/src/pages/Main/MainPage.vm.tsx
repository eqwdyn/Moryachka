"use client";

import { MainPageLayout } from "@/pages/Main/components/MainPageLayout";
import { Category } from "@/pages/Main/components/Category";
import { Show } from "@/shared/ui/Show";
import { BackFallLengthDishes } from "@/pages/Main/components/BackFallLengthDishes";
import { BackFallErrorDishes } from "@/pages/Main/components/BackFallErrorDishes";
import { LoaderGate } from "@/shared/ui/LoaderGate";
import { CategoriesNavigation } from "@/pages/Main/components/CategoriesNavigation";
import { SearchDishes } from "@/pages/Main/components/SearchDishes";
import { CategoryWithDishes } from "@/entities/Category.ent";
import { FC, useEffect, useMemo, useState } from "react";
import { search } from "@/pages/Main/utils/search";
import { CategoriesSlider } from "@/pages/Main/components/CategoriesSlider";

interface Props {
  initItems: CategoryWithDishes[];
  isLoading: boolean;
  isError: boolean;
}

export const MainPageVM: FC<Props> = ({ initItems, isLoading, isError }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [items, setItems] = useState<typeof initItems>(() => initItems);

  useEffect(() => {
    const timer = setTimeout(() => {
      const result = search({
        query: searchValue,
        categories: initItems,
      });
      setItems(result);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchValue, initItems]);
  return (
    <>
      <MainPageLayout.Header>
        <Show when={!!items.length}>
          <CategoriesSlider items={items} />
        </Show>
        <SearchDishes
          сolor="white"
          value={searchValue}
          setValue={setSearchValue}
        />
      </MainPageLayout.Header>

      <MainPageLayout>
        <MainPageLayout.Categories>
          <SearchDishes
            сolor="black"
            value={searchValue}
            setValue={setSearchValue}
          />

          <LoaderGate isLoading={isLoading} loaderSlot={<></>}>
            <Show when={!isError && !!items.length}>
              <CategoriesNavigation categories={items} />
            </Show>
          </LoaderGate>
        </MainPageLayout.Categories>

        <MainPageLayout.Menu>
          <LoaderGate isLoading={isLoading}>
            <Show when={!isError && !!items.length}>
              {items.map((cat, index) => (
                <Category
                  key={cat.id}
                  item={cat}
                  dishesImageLoading={index < 3 ? "eager" : "lazy"}
                />
              ))}
            </Show>
            <Show when={!items.length && !isError}>
              <BackFallLengthDishes />
            </Show>

            <Show when={isError}>
              <BackFallErrorDishes />
            </Show>
          </LoaderGate>
        </MainPageLayout.Menu>
      </MainPageLayout>
    </>
  );
};
