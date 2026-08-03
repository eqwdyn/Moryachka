import { Module } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { DishesController } from './dishes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from '../entities/dish.entity';
import { Category } from '../entities/category.entity';
import { S3ImagesModule } from 'src/s3-images/s3-images.module';

@Module({
  imports: [TypeOrmModule.forFeature([Dish, Category]), S3ImagesModule],
  providers: [DishesService],
  controllers: [DishesController],
})
export class DishesModule {}
