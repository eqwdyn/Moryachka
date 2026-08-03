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
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
  ApiConsumes,
} from '@nestjs/swagger';
import { DishesService } from './dishes.service';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { storage } from 'src/utils';
import { Dish } from '../entities/dish.entity';
import { dishesToInsert } from '../seeds/dishesMenu';
import { AdminGuard } from 'src/auth/auth.guard';

@ApiTags('Dishes')
@ApiResponse({
  status: 400,
  description: 'Validation error',
})
@ApiResponse({
  status: 500,
  description: 'Internal server error',
})
@Controller('dishes')
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @UseGuards(AdminGuard)
  @Post()
  @ApiOperation({ summary: 'Создать блюдо (с изображением)' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      required: [
        'title',
        'image',
        'description',
        'category_id',
        'count',
        'price',
      ],
      properties: {
        title: {
          description: 'Название блюда (минимум 3 символа)',
          example: 'Цезарь',
        },
        description: {
          description: 'Описание, ингридиенты',
          example:
            'Яичница (из 2-х яиц), тосты, охотничьи колбаски, сыр, специи, фреш салат',
        },
        count: {
          description: 'Граммовка',
          example: '300 гр',
        },
        price: {
          description: 'Цена',
          example: '600',
        },
        category_id: {
          description: 'ID категории, к которой относится блюдо',
          example: 3,
          type: 'number',
        },
        image: {
          type: 'file',
          format: 'binary',
          description: 'Файл изображения',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Блюдо успешно создано',
    type: Dish,
  })
  @UseInterceptors(FileInterceptor('image', { storage: storage }))
  create(
    @UploadedFile() image: Express.Multer.File,
    @Body() dto: CreateDishDto,
  ) {
    if (!image) {
      throw new BadRequestException('Missing property');
    }
    return this.dishesService.create(image, dto);
  }

  //   @Post('/examples')
  //   @ApiOperation({ summary: 'Создать категории' })
  //   @ApiResponse({ status: 201, description: 'Категории созданы' })
  //   async createSeed() {
  //     for (const dish of dishesToInsert) {
  //       await this.dishesService.createSeed('i.webp', {
  //         title: dish.title,
  //         description: dish.description,
  //         count: dish.count,
  //         category_id: dish.category_id.toString(),
  //         price: dish.price.toString(),
  //       });
  //     }

  //     return { status: 'success' };
  //   }

  @Get()
  @ApiOperation({ summary: 'Получить список блюд' })
  @ApiResponse({ status: 200, description: 'Список блюд', type: [Dish] })
  findAll() {
    return this.dishesService.findAll();
  }

  @Get('category/:id')
  @ApiOperation({ summary: 'Получить список блюд по категории' })
  @ApiResponse({ status: 200, description: 'Список блюд', type: [Dish] })
  findByCategoryId(@Param('id') id: string) {
    return this.dishesService.findByCategoryId(+id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить блюдо по ID' })
  @ApiParam({ name: 'id', description: 'ID блюда', type: 'number' })
  @ApiResponse({ status: 200, description: 'Блюдо найдено', type: Dish })
  @ApiResponse({ status: 404, description: 'Блюдо не найдено' })
  findOne(@Param('id') id: string) {
    return this.dishesService.findOne(+id);
  }

  @UseGuards(AdminGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Обновить блюдо (частично)' })
  @ApiParam({
    name: 'id',
    description: 'ID блюда для обновления',
    type: 'number',
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: {
          description: 'Название блюда (минимум 3 символа)',
          example: 'Цезарь',
        },
        description: {
          description: 'Описание, ингридиенты',
          example:
            'Яичница (из 2-х яиц), тосты, охотничьи колбаски, сыр, специи, фреш салат',
        },
        category_id: {
          description: 'ID категории, к которой относится блюдо',
          example: 3,
        },
        image: {
          type: 'file',
          format: 'binary',
          description: 'Файл изображения',
        },
      },
    },
  })
  @ApiResponse({ status: 200, description: 'Блюдо обновлено', type: Dish })
  @ApiResponse({ status: 404, description: 'Блюдо не найдено' })
  @UseInterceptors(FileInterceptor('image', { storage: storage }))
  update(
    @Param('id') id: string,
    @UploadedFile() image: Express.Multer.File | undefined,
    @Body() dto: UpdateDishDto,
  ) {
    return this.dishesService.update(+id, image, dto);
  }

  @UseGuards(AdminGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Удалить блюдо' })
  @ApiParam({
    name: 'id',
    description: 'ID блюда для удаления',
    type: 'number',
  })
  @ApiResponse({ status: 204, description: 'Блюдо удалено' })
  @ApiResponse({ status: 404, description: 'Блюдо не найдено' })
  remove(@Param('id') id: string) {
    return this.dishesService.remove(+id);
  }
}
