import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { Dish } from '../entities/dish.entity';
import { Category } from '../entities/category.entity';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';
import { S3ImagesService } from 'src/s3-images/s3-images.service';

@Injectable()
export class DishesService {
  constructor(
    @InjectRepository(Dish)
    private readonly dishRepository: Repository<Dish>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly s3Storage: S3ImagesService,
  ) {}

  async findAll(): Promise<Dish[]> {
    return this.dishRepository.find({
      order: { created_at: 'DESC' },
    });
  }

  async findByCategoryId(id: number): Promise<Dish[]> {
    return this.dishRepository.find({
      where: { category: { id } },
      order: { created_at: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Dish> {
    const dish = await this.dishRepository.findOne({
      where: { id },
    });

    if (!dish) {
      throw new NotFoundException(`Блюдо с id ${id} не найдено`);
    }

    return dish;
  }

  async create(image: Express.Multer.File, dto: CreateDishDto): Promise<Dish> {
    const category = await this.categoryRepository.findOne({
      where: { id: +dto.category_id },
    });
    if (!category) {
      throw new NotFoundException(
        `Категория с id ${dto.category_id} не найдена`,
      );
    }

    const imageUrl = await this.s3Storage.uploadFile(image);

    const dish = this.dishRepository.create({
      title: dto.title.trim(),
      description: dto.description.trim(),
      count: dto.count.trim(),
      price: +dto.price,
      image_url: imageUrl,
      category,
    });

    await this.cacheManager.clear();

    return this.dishRepository.save(dish);
  }

  //   async createSeed(filename: string, dto: CreateDishDto): Promise<Dish> {
  //     const category = await this.categoryRepository.findOne({
  //       where: { id: +dto.category_id },
  //     });
  //     if (!category) {
  //       throw new NotFoundException(
  //         `Категория с id ${dto.category_id} не найдена`,
  //       );
  //     }

  //     const dish = this.dishRepository.create({
  //       title: dto.title.trim(),
  //       description: dto.description.trim(),
  //       count: dto.count.trim(),
  //       price: +dto.price,
  //       image_url: filename,
  //       category,
  //     });

  //     await this.cacheManager.clear();

  //     return this.dishRepository.save(dish);
  //   }

  async update(
    id: number,
    image: Express.Multer.File | undefined,
    dto: UpdateDishDto,
  ): Promise<Dish> {
    if (
      !dto.category_id &&
      !dto.count?.trim() &&
      !dto.description?.trim() &&
      !Number(dto.price) &&
      !dto.title?.trim()
    ) {
      throw new BadRequestException('Fields are missing');
    }

    const dishToUpdate = await this.findOne(id);

    if (dto.category_id) {
      const newCategory = await this.categoryRepository.findOne({
        where: { id: +dto.category_id },
      });
      if (!newCategory) {
        throw new NotFoundException(
          `Категория с id ${dto.category_id} не найдена`,
        );
      }
      dishToUpdate.category = newCategory;
    }

    let newUrl: string | undefined;
    if (image) {
      newUrl = await this.s3Storage.uploadFile(image);
      this.s3Storage.deleteFile(dishToUpdate.image_url);
    }

    Object.assign(dishToUpdate, {
      title: dto.title ?? dishToUpdate.title,
      description: dto.description ?? dishToUpdate.description,
      count: dto.count ?? dishToUpdate.count,
      price: +(dto.price ?? dishToUpdate.price),
      image_url: image ? newUrl : dishToUpdate.image_url,
    });

    await this.cacheManager.clear();

    const dish = this.dishRepository.save(dishToUpdate);
    return dish;
  }

  async remove(id: number): Promise<void> {
    const dish = await this.findOne(id);

    await this.dishRepository.delete(id);

    try {
      this.s3Storage.deleteFile(dish.image_url);
    } catch (e) {
      console.log('Error while deleting image: ', e);
    }

    await this.cacheManager.clear();
  }
}
