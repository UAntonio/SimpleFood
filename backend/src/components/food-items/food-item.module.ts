import { Module } from '@nestjs/common';
import { FoodItemService } from './food-item.service';
import { FoodItemResolver } from './food-item.resolver';

@Module({
  providers: [FoodItemResolver, FoodItemService]
})
export class FoodItemModule {}
