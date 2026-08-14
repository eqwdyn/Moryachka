"use client";

import { FC, useState } from "react";
import { Show } from "@/shared/ui/Show";
import { CategoriesNavigation } from "@/shared/ui/CategoriesNavigation";
import { CategoryWithDishes } from "@/entities/Category.ent";
import { search } from "@/shared/utils/search";
import { CategoriesSlider } from "@/shared/ui/CategoriesSlider";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { BackFallErrorDishes } from "@/shared/ui/BackFallErrorDishes";
import { PageLayout } from "@/shared/ui/PageLayout";
import { SearchDishes } from "@/shared/ui/SearchDishes";

import { BackFallLengthDishes } from "@/pages/Main/components/BackFallLengthDishes";
import { Category } from "@/pages/Main/components/Category";
import { filterEmptyCategories } from "@/shared/utils/filterEmptyCategories";

interface Props {
  initItems: CategoryWithDishes[];
  isError: boolean;
}

export const MainPageVM: FC<Props> = ({ initItems, isError }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [items, setItems] = useState<typeof initItems>(() =>
    filterEmptyCategories(initItems),
  );

  const searchHandle = () => {
    const result = search({
      query: searchValue,
      categories: initItems,
    });
    setItems(filterEmptyCategories(result));
  };

  useDebounce(searchHandle, 300, [searchValue, initItems]);
  return (
    <>
      <PageLayout.Header>
        <Show when={!!items.length}>
          <CategoriesSlider items={items} />
        </Show>
        <SearchDishes
          сolor="white"
          value={searchValue}
          setValue={setSearchValue}
        />
      </PageLayout.Header>

      <PageLayout>
        <PageLayout.Layout>
          <PageLayout.Categories>
            <SearchDishes
              сolor="black"
              value={searchValue}
              setValue={setSearchValue}
            />

            <Show when={!isError && !!items.length}>
              <CategoriesNavigation categories={items} />
            </Show>
          </PageLayout.Categories>

          <PageLayout.Menu>
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
          </PageLayout.Menu>
        </PageLayout.Layout>
      </PageLayout>
    </>
  );
};
