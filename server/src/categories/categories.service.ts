import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { type Cache } from 'cache-manager';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find({
      order: { created_at: 'DESC' },
    });
  }

  async findAllWithDishes(): Promise<Category[]> {
    return this.categoryRepository.find({
      order: { created_at: 'DESC' },
      relations: {
        dishes: true,
      },
    });
  }

  async findOne(id: number): Promise<Category> {
    const category = await this.categoryRepository.findOne({
      where: { id },
    });
    if (!category) {
      throw new NotFoundException(`Категория с id ${id} не найдена`);
    }
    return category;
  }

  async create(title: string): Promise<Category> {
    const category = this.categoryRepository.create({
      title,
    });

    await this.cacheManager.clear();
    return this.categoryRepository.save(category);
  }

  async update(id: number, title: string): Promise<Category> {
    const categoryToUpdate = await this.findOne(id);

    Object.assign(categoryToUpdate, {
      title: title ?? categoryToUpdate.title,
    });

    await this.cacheManager.clear();

    return this.categoryRepository.save(categoryToUpdate);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.cacheManager.clear();
    await this.categoryRepository.delete(id);
  }
}
