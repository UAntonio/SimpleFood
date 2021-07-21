import { Test, TestingModule } from '@nestjs/testing';
import { FoodCategoriesResolver } from './food-categories.resolver';
import { FoodCategoriesService } from './food-categories.service';

describe('FoodCategoriesResolver', () => {
  let resolver: FoodCategoriesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodCategoriesResolver, FoodCategoriesService],
    }).compile();

    resolver = module.get<FoodCategoriesResolver>(FoodCategoriesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
