import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FoodItemService } from './food-item.service';
import { FoodItem } from './entities/food-item.entity';
import { CreateFoodItemInput } from './dto/create-food-item.input';
import { UpdateFoodItemInput } from './dto/update-food-item.input';

@Resolver(() => FoodItem)
export class FoodItemResolver {
  constructor(private readonly foodItemService: FoodItemService) {}

  @Mutation(() => FoodItem)
  createFoodItem(@Args('createFoodItemInput') createFoodItemInput: CreateFoodItemInput) {
    return this.foodItemService.create(createFoodItemInput);
  }

  @Query(() => [FoodItem], { name: 'foodItem' })
  findAll() {
    return this.foodItemService.findAll();
  }

  @Query(() => FoodItem, { name: 'foodItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.foodItemService.findOne(id);
  }

  @Mutation(() => FoodItem)
  updateFoodItem(@Args('updateFoodItemInput') updateFoodItemInput: UpdateFoodItemInput) {
    return this.foodItemService.update(updateFoodItemInput.id, updateFoodItemInput);
  }

  @Mutation(() => FoodItem)
  removeFoodItem(@Args('id', { type: () => Int }) id: number) {
    return this.foodItemService.remove(id);
  }
}
