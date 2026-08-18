import { Category, CategoryWithDishes } from "@/entities/Category.ent";
import { apiCSR, apiSSR } from "@/shared/api/api.base";
import { CATEGORIES_API_PATH } from "@/shared/config/apiPaths";

export class CategoriesService {
  static async findAllWithDishes(): Promise<CategoryWithDishes[]> {
    const res = await apiSSR.get<CategoryWithDishes[]>(
      `${CATEGORIES_API_PATH}/dishes`,
    );
    return res.data;
  }
  static async findAllWithDishesClient(): Promise<CategoryWithDishes[]> {
    const res = await apiCSR.get<CategoryWithDishes[]>(
      `${CATEGORIES_API_PATH}/dishes`,
    );
    return res.data;
  }

  /**
   * Create Category
   */
  static async create(title: string, token: string): Promise<Category> {
    const res = await apiCSR.post<Category>(
      `${CATEGORIES_API_PATH}`,
      {
        title,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return res.data;
  }

  /**
   * Update category
   */
  static async update({
    id,
    title,
    token,
  }: {
    id: number;
    title: string;
    token: string;
  }): Promise<Category> {
    if (!title.trim()) throw new Error("Unvalid value for title!");

    const res = await apiCSR.patch<Category>(
      `${CATEGORIES_API_PATH}/${id}`,
      {
        title,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return res.data;
  }

  /**
   * Remove Category
   */
  static async remove(id: number, token: string): Promise<void> {
    await apiCSR.delete(`${CATEGORIES_API_PATH}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("deleted");
  }
}
