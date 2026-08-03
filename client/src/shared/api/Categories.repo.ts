import type { Category, CategoryWithDishes } from "@entities/Category.ent";
import { adminApi, api } from "./api.base";
import { CATEGORIES_API_URL } from "./urls";

export class CategoriesRepo {
  /**
   * Get All Categories
   */
  static async findAll(): Promise<Category[]> {
    const res = await api.get<Category[]>(CATEGORIES_API_URL);
    return res.data;
  }

  static async findAllWithDishes(): Promise<CategoryWithDishes[]> {
    const res = await api.get<CategoryWithDishes[]>(
      `${CATEGORIES_API_URL}/dishes`,
    );
    return res.data;
  }

  /**
   * Get Category by Id
   */
  static async findOne(id: number): Promise<Category> {
    const res = await api.get<Category>(`${CATEGORIES_API_URL}/${id}`);
    return res.data;
  }

  /**
   * Create Category (title + image)
   */
  static async create(title: string): Promise<Category> {
    if (!title.trim()) throw new Error("Unvalid value for title!");

    const res = await adminApi.post<Category>(`${CATEGORIES_API_URL}`, {
      title,
    });
    return res.data;
  }

  /**
   * Update category: title and/or image (optional)
   */
  static async update(id: number, title: string): Promise<Category> {
    if (!title.trim()) throw new Error("Unvalid value for title!");

    const res = await adminApi.patch<Category>(`${CATEGORIES_API_URL}/${id}`, {
      title,
    });
    return res.data;
  }

  /**
   * Remove Category
   */
  static async remove(id: number): Promise<void> {
    await adminApi.delete(`${CATEGORIES_API_URL}/${id}`, {});
    console.log("deleted");
  }
}
