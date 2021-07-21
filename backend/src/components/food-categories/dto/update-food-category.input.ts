import { CreateFoodCategoryInput } from './create-food-category.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFoodCategoryInput extends PartialType(CreateFoodCategoryInput) {
  @Field(() => Int)
  id: number;
}
