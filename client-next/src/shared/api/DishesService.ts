import { Dish } from "@/entities/Dish.ent";
import { apiCSR } from "@/shared/api/api.base";
import { DISHES_API_PATH } from "@/shared/config/apiPaths";

export class DishesService {
  /**
   * Создать блюдо (админка: title, description, count, price, category_id, image)
   */
  static async create(formData: FormData, token: string): Promise<Dish> {
    if (
      !formData.has("title") ||
      !formData.has("description") ||
      !formData.has("count") ||
      !formData.has("price") ||
      !formData.has("category_id") ||
      !formData.has("image")
    ) {
      throw new Error("Missing properties while creating new dish");
    }

    const res = await apiCSR.post<Dish>(DISHES_API_PATH, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }

  /**
   * Обновить блюдо (админка)
   * Можно передать любые поля из UpdateDishDto и/или новый файл.
   * Если поле не передано — бэк (через DTO) решит, обновлять ли его.
   */
  static async update(
    id: number,
    formData: FormData,
    token: string,
  ): Promise<Dish> {
    if (
      !formData.has("title") &&
      !formData.has("description") &&
      !formData.has("count") &&
      !formData.has("price") &&
      !formData.has("category_id") &&
      !formData.has("image")
    ) {
      throw new Error("Missing properties while creating new dish");
    }

    const res = await apiCSR.patch<Dish>(`${DISHES_API_PATH}/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }

  /**
   * Удалить блюдо (админка)
   */
  static async remove(id: number, token: string): Promise<void> {
    await apiCSR.delete(`${DISHES_API_PATH}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
