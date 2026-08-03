import type { Dish } from "@entities/Dish.ent";
import { adminApi, api } from "./api.base";
import { DISHES_API_URL } from "./urls";

export class DishesRepo {
  /**
   * Получить все блюда (публичный эндпоинт)
   */
  static async findAll(): Promise<Dish[]> {
    const res = await api.get<Dish[]>(DISHES_API_URL);
    return res.data;
  }

  /**
   * Получить блюда по категории (публичный эндпоинт)
   */
  static async findByCategoryId(categoryId: number): Promise<Dish[]> {
    const res = await api.get<Dish[]>(
      `${DISHES_API_URL}/category/${categoryId}`,
    );
    return res.data;
  }

  /**
   * Получить блюдо по ID (публичный эндпоинт)
   */
  static async findOne(id: number): Promise<Dish> {
    const res = await api.get<Dish>(`${DISHES_API_URL}/${id}`);
    return res.data;
  }

  /**
   * Создать блюдо (админка: title, description, count, price, category_id, image)
   */
  static async create(formData: FormData): Promise<Dish> {
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

    const res = await adminApi.post<Dish>(DISHES_API_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data;
  }

  /**
   * Обновить блюдо (админка)
   * Можно передать любые поля из UpdateDishDto и/или новый файл.
   * Если поле не передано — бэк (через DTO) решит, обновлять ли его.
   */
  static async update(id: number, formData: FormData): Promise<Dish> {
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

    const res = await adminApi.patch<Dish>(
      `${DISHES_API_URL}/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return res.data;
  }

  /**
   * Удалить блюдо (админка)
   */
  static async remove(id: number): Promise<void> {
    await adminApi.delete(`${DISHES_API_URL}/${id}`);
  }
}
