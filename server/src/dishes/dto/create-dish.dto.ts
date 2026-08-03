import {
  IsString,
  MinLength,
  IsNotEmpty,
  IsNumberString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDishDto {
  @ApiProperty({
    description: 'Название блюда (минимум 3 символа)',
    example: 'Цезарь',
    required: true,
  })
  @IsString()
  @MinLength(3)
  title!: string;

  @ApiProperty({
    description: 'Описание, ингридиенты',
    example:
      'Яичница (из 2-х яиц), тосты, охотничьи колбаски, сыр, специи, фреш салат',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  description!: string;

  @ApiProperty({
    description: 'Граммовка',
    example: '300 гр',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  count!: string;

  @ApiProperty({
    description: 'Цена',
    example: '600',
    required: true,
  })
  @IsNumberString()
  price!: string;

  @ApiProperty({
    description: 'ID категории, к которой относится блюдо',
    example: 3,
    required: true,
  })
  @IsNotEmpty()
  @IsNumberString()
  category_id!: string;
}
