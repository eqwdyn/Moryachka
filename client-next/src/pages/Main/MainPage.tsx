import { getCategories } from "@/pages/Main/api/getCategories";
import { MainPageVM } from "@/pages/Main/MainPage.vm";
import { filterEmptyCategories } from "@/pages/Main/utils/filterEmptyCategories";

export const MainPage = async () => {
  const data = await getCategories();
  const categories = filterEmptyCategories(data);

  return (
    <MainPageVM initItems={categories} isLoading={false} isError={false} />
  );
};
