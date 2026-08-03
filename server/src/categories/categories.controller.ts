import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  HttpCode,
  HttpStatus,
  BadRequestException,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from 'src/categories/dto/create-category.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { categories } from 'src/seeds/categoriesMenu';
import { AdminGuard } from 'src/auth/auth.guard';

@ApiTags('categories')
@UseInterceptors(CacheInterceptor)
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  //   @Post('/examples')
  //   @ApiOperation({ summary: 'Создать категории' })
  //   @ApiResponse({ status: 201, description: 'Категории созданы' })
  //   async createExamples() {
  //     for (const cat of categories) {
  //       await this.categoriesService.create(cat);
  //     }

  //     return { status: 'success' };
  //   }

  @UseGuards(AdminGuard)
  @Post()
  @ApiOperation({ summary: 'Создать категорию' })
  @ApiResponse({ status: 201, description: 'Категория создана' })
  async create(@Body() dto: CreateCategoryDto) {
    const trimmedTitle = dto.title.trim();
    if (!trimmedTitle) {
      throw new BadRequestException('Missing property');
    }

    return this.categoriesService.create(trimmedTitle);
  }

  @Get()
  @ApiOperation({ summary: 'Получить все категории' })
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get('/dishes')
  @ApiOperation({ summary: 'Получить все категории с блюдами' })
  findAllWithDishes() {
    return this.categoriesService.findAllWithDishes();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить категорию по ID' })
  @ApiResponse({ status: 404, description: 'Категория не найдена' })
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  @UseGuards(AdminGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Обновить категорию' })
  @ApiResponse({ status: 404, description: 'Категория не найдена' })
  update(@Param('id') id: string, @Body() { title }: { title: string }) {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      throw new BadRequestException('Missing property');
    }

    return this.categoriesService.update(+id, trimmedTitle);
  }

  @UseGuards(AdminGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Удалить категорию' })
  @ApiResponse({ status: 404, description: 'Категория не найдена' })
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
