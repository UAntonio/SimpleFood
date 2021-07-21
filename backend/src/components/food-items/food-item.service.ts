import { Injectable } from '@nestjs/common';
import { CreateFoodItemInput } from './dto/create-food-item.input';
import { UpdateFoodItemInput } from './dto/update-food-item.input';

@Injectable()
export class FoodItemService {
  create(createFoodItemInput: CreateFoodItemInput) {
    return 'This action adds a new foodItem';
  }

  findAll() {
    return `This action returns all foodItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} foodItem`;
  }

  update(id: number, updateFoodItemInput: UpdateFoodItemInput) {
    return `This action updates a #${id} foodItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} foodItem`;
  }
}
