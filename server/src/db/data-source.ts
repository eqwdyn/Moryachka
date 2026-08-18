import { DataSource } from 'typeorm';
import { Dish } from '../entities/dish.entity';
import { Category } from '../entities/category.entity';

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT) ?? 5432,
  username: process.env.DB_USERNAME ?? 'postgres',
  password: process.env.DB_PASSWORD ?? '5342312',
  database: process.env.DB_NAME ?? 'moryachka',
  entities: [Dish, Category],
  synchronize: false,
});
