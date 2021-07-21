import { Module } from '@nestjs/common';
import { FoodCategoriesService } from './food-categories.service';
import { FoodCategoriesResolver } from './food-categories.resolver';

@Module({
  providers: [FoodCategoriesResolver, FoodCategoriesService]
})
export class FoodCategoriesModule {}
