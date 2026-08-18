"use client";

import { Show } from "@/shared/ui/Show";
import { CategoriesNavigation } from "@/shared/ui/CategoriesNavigation";
import { SearchDishes } from "@/shared/ui/SearchDishes";
import { FC, useState } from "react";
import { search } from "@/shared/utils/search";
import { CategoriesSlider } from "@/shared/ui/CategoriesSlider";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { PageLayout } from "@/shared/ui/PageLayout";
import { BackFallErrorDishes } from "@/shared/ui/BackFallErrorDishes";
import { LoaderGate } from "@/shared/ui/LoaderGate";

import { CategoryWithDishes } from "@/entities/Category.ent";
import { filterEmptyCategories } from "@/shared/utils/filterEmptyCategories";
import { useCategoriesDishes } from "@/app/admin/hooks/useCategoriesDishes";
import { useAddCategoryStore } from "@/app/admin/store/AddCategoryModal.store";
import { AddCategoryItem } from "@/app/admin/components/AddCategoryItem";
import { AdminCategory } from "@/app/admin/components/AdminCategory";

interface Props {
  token: string;
}

export const AdminPageVM: FC<Props> = ({ token }) => {
  const { data, isLoading, isError } = useCategoriesDishes();
  const { open } = useAddCategoryStore();

  const [searchValue, setSearchValue] = useState<string>("");
  const [items, setItems] = useState<CategoryWithDishes[]>(() => data ?? []);

  const searchHandle = () => {
    const result = search({
      query: searchValue,
      categories: data,
    });
    setItems(filterEmptyCategories(result));
  };

  useDebounce(searchHandle, 300, [searchValue, data]);
  return (
    <>
      <PageLayout.Header>
        <LoaderGate isLoading={isLoading} loaderSlot={<></>}>
          <Show when={!!items.length}>
            <CategoriesSlider items={items} />
          </Show>
        </LoaderGate>
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

            <LoaderGate isLoading={isLoading} loaderSlot={<></>}>
              <Show when={!isError && !!items.length}>
                <CategoriesNavigation categories={items} />
              </Show>
            </LoaderGate>
          </PageLayout.Categories>

          <PageLayout.Menu>
            <AddCategoryItem addHandle={open} />
            <div style={{ paddingTop: 20 }}></div>
            <LoaderGate isLoading={isLoading}>
              <Show when={!isError && !!items.length}>
                {items.map((cat, index) => (
                  <AdminCategory
                    key={cat.id}
                    item={cat}
                    dishesImageLoading={index < 3 ? "eager" : "lazy"}
                    token={token}
                  />
                ))}
              </Show>
              <Show when={isError}>
                <BackFallErrorDishes />
              </Show>
            </LoaderGate>
          </PageLayout.Menu>
        </PageLayout.Layout>
      </PageLayout>
    </>
  );
};
