import { ContentContainer } from "@shared/ui/ContentContainer";
import cl from "./AdminLayout.module.css";
import { AdminCafeMenu } from "@features/AdminCafeMenu";
import { SearchBar } from "@shared/ui/SearchBar";
import { useMemo, useState } from "react";
import { CategoriesBar } from "@features/CategoriesBar";
import { HeaderLayout } from "@widgets/HeaderLayout";
import { useCategoriesDishes } from "@shared/hooks/useCategoriesDishes";
import { LoaderPage } from "@pages/LoaderPage";

export const AdminLayout = () => {
  const [value, setValue] = useState<string>("");
  const { data: categories, isLoading, error } = useCategoriesDishes();

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

  if (isLoading) return <LoaderPage />;
  if (error) {
    console.error("Ошибка загрузки категорий:", error);
    return <div>Ошибка загрузки меню</div>;
  }

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
            <CategoriesBar categories={filteredItems} />
          </div>
          <div className={cl.contentWrapper}>
            <AdminCafeMenu items={filteredItems} />
          </div>
        </div>
      </ContentContainer>
    </>
  );
};
