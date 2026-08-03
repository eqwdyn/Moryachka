import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from './category.entity';

@Entity({ name: 'dishes' })
export class Dish {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Category, (cat) => cat.dishes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'category_id' })
  category?: Category;

  @Column({ type: 'varchar', nullable: false })
  title!: string;

  @Column({ type: 'varchar', nullable: false })
  description!: string;

  @Column({ type: 'varchar', nullable: false })
  count!: string; // 300 kg

  @Column({ type: 'int', nullable: false })
  price!: number;

  @Column({ type: 'varchar', nullable: false })
  image_url!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
