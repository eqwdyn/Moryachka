import { MainPageLayout } from "@/pages/Main/components/MainPageLayout";
import { Category } from "@/pages/Main/components/Category";
import { Show } from "@/shared/ui/Show";
import { BackFallLengthDishes } from "@/pages/Main/components/BackFallLengthDishes";
import { BackFallErrorDishes } from "@/pages/Main/components/BackFallErrorDishes";
import { LoaderGate } from "@/shared/ui/LoaderGate";
import { CategoriesNavigation } from "@/pages/Main/components/CategoriesNavigation";
import { SearchDishes } from "@/pages/Main/components/SearchDishes";
import { CategoryWithDishes } from "@/entities/Category.ent";
import { FC } from "react";

interface Props {
  items: CategoryWithDishes[];
  isLoading: boolean;
  isError: boolean;
}

export const MainPageVM: FC<Props> = ({ items, isLoading, isError }) => {
  return (
    <>
      <MainPageLayout.Header>
        <SearchDishes сolor="white" />
      </MainPageLayout.Header>

      <MainPageLayout>
        <MainPageLayout.Categories>
          <SearchDishes сolor="black" />

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
