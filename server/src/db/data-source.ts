import { DataSource } from 'typeorm';
import { Dish } from '../entities/dish.entity';
import { Category } from '../entities/category.entity';

export default new DataSource({
  //   type: 'postgres',
  //   host: process.env.DB_HOST,
  //   port: Number(process.env.DB_PORT),
  //   username: process.env.DB_USERNAME,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DB_NAME,
  //   entities: [Dish, Category],
  //   synchronize: process.env.NODE_ENV === 'env',

  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '5342312',
  database: 'moryachka',
  entities: [Dish, Category],
  synchronize: false,
});
