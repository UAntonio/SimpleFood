import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FoodCategoriesService } from './food-categories.service';
import { FoodCategory } from './entities/food-category.entity';
import { CreateFoodCategoryInput } from './dto/create-food-category.input';
import { UpdateFoodCategoryInput } from './dto/update-food-category.input';

@Resolver(() => FoodCategory)
export class FoodCategoriesResolver {
  constructor(private readonly foodCategoriesService: FoodCategoriesService) {}

  @Mutation(() => FoodCategory)
  createFoodCategory(@Args('createFoodCategoryInput') createFoodCategoryInput: CreateFoodCategoryInput) {
    return this.foodCategoriesService.create(createFoodCategoryInput);
  }

  @Query(() => [FoodCategory], { name: 'foodCategories' })
  findAll() {
    return this.foodCategoriesService.findAll();
  }

  @Query(() => FoodCategory, { name: 'foodCategory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.foodCategoriesService.findOne(id);
  }

  @Mutation(() => FoodCategory)
  updateFoodCategory(@Args('updateFoodCategoryInput') updateFoodCategoryInput: UpdateFoodCategoryInput) {
    return this.foodCategoriesService.update(updateFoodCategoryInput.id, updateFoodCategoryInput);
  }

  @Mutation(() => FoodCategory)
  removeFoodCategory(@Args('id', { type: () => Int }) id: number) {
    return this.foodCategoriesService.remove(id);
  }
}
