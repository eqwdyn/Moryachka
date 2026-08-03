export interface CreateDishDto {
  title: string;
  description: string;
  count: string;
  price: number;
  categoryId: number;
  image: File;
}
