import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFoodCategoryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
