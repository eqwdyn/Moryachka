import { DataSource } from 'typeorm';
import { Dish } from './entities/dish.entity';
import { Category } from './entities/category.entity';

export default new DataSource({
  type: 'postgres',
  //   database: process.env.POSTGRES_DATABASE as string,
  //   host: process.env.POSTGRES_HOST as string,
  //   port: Number(process.env.POSTGRES_PORT),
  //   username: process.env.POSTGRES_USER as string,
  //   password: process.env.POSTGRES_PASSWORD?.toString(),
  database: 'moryachka',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '5342312',
  entities: [Dish, Category],

  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.js,.ts}'],
});
