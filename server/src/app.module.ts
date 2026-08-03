import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './categories/categories.module';
import { DishesModule } from './dishes/dishes.module';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { CacheModule } from '@nestjs/cache-manager';
import { Dish } from './entities/dish.entity';
import { Category } from './entities/category.entity';
import { JwtModule } from '@nestjs/jwt';
// import { FILE_UPLOADS_DIR, UPLOADS_DIR_NAME } from 'src/constants';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: FILE_UPLOADS_DIR,
    //   serveRoot: UPLOADS_DIR_NAME,
    // }),
    CacheModule.register({
      ttl: 5 * 60 * 1000, // 5m
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Dish, Category],
      //   synchronize: false,
      synchronize: true,
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
      global: true,
    }),
    CategoryModule,
    DishesModule,
    AuthModule,
  ],
})
export class AppModule {}
