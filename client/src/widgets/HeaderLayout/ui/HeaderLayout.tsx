import type { CategoryWithDishes } from "@entities/Category.ent";
import cl from "./HeaderLayout.module.css";
import { Header } from "@widgets/Header/ui/Header";
import { CategoriesSlider } from "@widgets/CategoriesSlider";
import { SearchBar } from "@shared/ui/SearchBar";

export const HeaderLayout = ({
  value,
  setValue,
  items,
}: {
  value: string;
  setValue: (text: string) => void;
  items: CategoryWithDishes[] | undefined;
}) => {
  return (
    <div className={cl.headerWrapper}>
      <Header />
      <div className={cl.categoriesSliderWrapper}>
        <CategoriesSlider items={items} />
      </div>
      <div className={cl.searchBarHeaderWrapper}>
        <SearchBar
          value={value}
          setValue={setValue}
          iconColor="white"
          placeholder="Поиск блюд"
        />
      </div>
    </div>
  );
};
