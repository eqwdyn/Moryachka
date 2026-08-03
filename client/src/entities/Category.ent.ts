import type { Dish } from "@entities/Dish.ent";

export interface Category {
  id: number;
  title: string;
}

export interface CategoryWithDishes extends Category {
  dishes: Dish[];
}
