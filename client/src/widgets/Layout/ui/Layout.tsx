import { ContentContainer } from "@shared/ui/ContentContainer";
import cl from "./Layout.module.css";
import { SearchBar } from "@shared/ui/SearchBar";
import { useMemo, useState } from "react";
import { useFilteredCategoriesDishes } from "@shared/hooks/useCategoriesDishes";
import { HeaderLayout } from "@widgets/HeaderLayout";
import { LoaderPage } from "@pages/LoaderPage";
import { BackFallErrorDishes } from "@widgets/BackFallErrorDishes";
import type { CategoryWithDishes } from "@entities/Category.ent";
import { CategoriesBar } from "@features/CategoriesBar";
import { CafeMenu } from "@features/CafeMenu";

export const Layout = () => {
  const [value, setValue] = useState<string>("");
  const { data: categories, isLoading, error } = useFilteredCategoriesDishes();

  const filteredItems = useMemo(() => {
    if (!value.trim() || !categories) return categories;

    const lower = value.toLowerCase();

    return categories
      .map((category) => ({
        ...category,
        dishes: category.dishes.filter((dish) =>
          dish.title.toLowerCase().includes(lower),
        ),
      }))
      .filter((category) => category.dishes.length > 0);
  }, [value, categories]);

  return (
    <>
      <HeaderLayout value={value} setValue={setValue} items={filteredItems} />
      <ContentContainer>
        <div className={cl.layout}>
          <div className={cl.categoriesBarWrapper}>
            <div className={cl.searchBarContentWrapper}>
              <SearchBar
                value={value}
                setValue={setValue}
                iconColor="black"
                placeholder="Поиск блюд"
              />
            </div>
            {isLoading || error ? (
              <></>
            ) : (
              <CategoriesBar categories={filteredItems} />
            )}
          </div>
          <div className={cl.contentWrapper}>
            <CafeMenuWrapper
              error={error}
              isLoading={isLoading}
              items={filteredItems}
            />
          </div>
        </div>
      </ContentContainer>
    </>
  );
};

const CafeMenuWrapper = ({
  error,
  isLoading,
  items,
}: {
  error: any;
  isLoading: boolean;
  items: CategoryWithDishes[] | undefined;
}) => {
  if (error) return <BackFallErrorDishes />;
  if (isLoading) return <LoaderPage />;

  return <CafeMenu items={items} />;
};
