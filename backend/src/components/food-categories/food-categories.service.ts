import { Injectable } from '@nestjs/common';
import { CreateFoodCategoryInput } from './dto/create-food-category.input';
import { UpdateFoodCategoryInput } from './dto/update-food-category.input';

@Injectable()
export class FoodCategoriesService {
  create(createFoodCategoryInput: CreateFoodCategoryInput) {
    return 'This action adds a new foodCategory';
  }

  findAll() {
    return `This action returns all foodCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} foodCategory`;
  }

  update(id: number, updateFoodCategoryInput: UpdateFoodCategoryInput) {
    return `This action updates a #${id} foodCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} foodCategory`;
  }
}
