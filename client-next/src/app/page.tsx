import { MainPageVM } from "@/app/main/MainPage.vm";
import { CategoriesService } from "@/shared/api/CategoriesService";
import { apiWrapper } from "@/shared/utils/api.wrapper";
import { filterEmptyCategories } from "@/shared/utils/filterEmptyCategories";

export default async function Home() {
  const { isError, data } = await apiWrapper(
    CategoriesService.findAllWithDishes,
  );

  //   console.log(`Server side Env: ${process.env.BACKEND_URL}`);
  //   console.log(`Client side Env: ${process.env.NEXT_PUBLIC_API}`);
  //   console.log(
  //     "CATEGORIES WITH DISHES FROM BACKEND:\n",
  //     JSON.stringify(data, null, 2),
  //   );
  const categories = filterEmptyCategories(data ?? []);

  return <MainPageVM initItems={categories} isError={isError} />;
}

// export const revalidate = 300; // Prod
export const revalidate = 10; // Dev
