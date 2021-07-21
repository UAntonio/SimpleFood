import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class FoodCategory {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
