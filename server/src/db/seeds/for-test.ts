import { DataSource } from 'typeorm';
import { Category } from '../../entities/category.entity';
import { Dish } from '../../entities/dish.entity';
import { categoriesSeed } from './stores/categories.store';
import { dishesSeed } from './stores/dishes.store';

export async function runSeed(dataSource: DataSource) {
  await dataSource.synchronize(false);

  const categoryRepo = dataSource.getRepository(Category);
  const dishRepo = dataSource.getRepository(Dish);

  for (const cat of categoriesSeed) {
    const existing = await categoryRepo.findOne({
      where: { title: cat },
    });

    const category = categoryRepo.create({ title: cat });
    if (!existing) {
      await categoryRepo.save(category);
    }
  }

  const dishImageUrl =
    'https://c0e4d041-eba7-495c-bd58-dbd184a94c09.s3.timeweb.com/dishes/i.webp';
  for (const d of dishesSeed) {
    const category = await categoryRepo.findOne({
      where: { id: d.category_id },
    });
    if (!category) {
      continue;
    }

    const dish = dishRepo.create({
      title: d.title.trim(),
      description: d.description.trim(),
      count: d.count.trim(),
      price: d.price,
      image_url: dishImageUrl,
      category,
    });

    await dishRepo.save(dish);
  }
}
