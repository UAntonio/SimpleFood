import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class FoodItem {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
