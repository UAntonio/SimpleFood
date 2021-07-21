import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodCategoriesModule } from './components/food-categories/food-categories.module';
import { FoodItemModule } from './components/food-items/food-item.module';
import { RestaurantsModule } from './components/restaurants/restaurants.module';
import { UserModule } from './components/users/user.module';


@Module({
  imports: [UserModule, RestaurantsModule, FoodCategoriesModule, FoodItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
