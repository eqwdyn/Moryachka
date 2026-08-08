export interface Dish {
  id: number;
  title: string;
  description: string;
  image_url: string;
  count: string;
  price: number;
  //   category?: {
  //     id: number;
  //     title: string;
  //     image_url?: string;
  //   };
  //   created_at: Date | string;
  //   updated_at: Date | string;
}

// export class Dish {
//   id!: number;
//   category?: Category;
//   title!: string;
//   description!: string;
//   count!: string; // 300 kg
//   price!: number;
//   image_url!: string;
//   created_at!: Date;
//   updated_at!: Date;
// }
