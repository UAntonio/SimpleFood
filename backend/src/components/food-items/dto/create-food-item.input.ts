import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFoodItemInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
