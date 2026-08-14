import { MainPageVM } from "@/pages/Main/MainPage.vm";
import { CategoriesService } from "@/shared/api/CategoriesService";
import { apiWrapper } from "@/shared/utils/api.wrapper";
import { filterEmptyCategories } from "@/shared/utils/filterEmptyCategories";

export const MainPage = async () => {
  const { isError, data } = await apiWrapper(
    CategoriesService.findAllWithDishes,
  );
  const categories = filterEmptyCategories(data ?? []);

  return <MainPageVM initItems={categories} isError={isError} />;
};
