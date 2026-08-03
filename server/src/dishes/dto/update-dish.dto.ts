import {
  IsString,
  IsOptional,
  IsNumberString,
  IsNotEmpty,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDishDto {
  @ApiProperty({
    description: 'Название блюда (минимум 3 символа, если передано)',
    example: 'Цезарь',
    required: false,
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({
    description: 'Описание, ингридиенты',
    example:
      'Яичница (из 2-х яиц), тосты, охотничьи колбаски, сыр, специи, фреш салат',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description?: string;

  @ApiProperty({
    description: 'Граммовка',
    example: '300 гр',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  count?: string;

  @ApiProperty({
    description: 'Цена',
    example: '600',
    required: false,
  })
  @IsOptional()
  @IsNumberString()
  price?: string;

  @ApiProperty({
    description: 'ID категории (если нужно перепривязать блюдо)',
    example: 3,
    required: false,
  })
  @IsOptional()
  @IsNumberString()
  category_id?: string;
}
