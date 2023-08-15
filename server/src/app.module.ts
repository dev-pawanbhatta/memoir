import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './schema/category.schema';
import { CategoryService } from './service/category.service';
import { CategoryController } from './controller/category.controller';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://pawanbhatta:L0XAktvyVuscLF0S@cluster0.pytz0gw.mongodb.net/?retryWrites=true&w=majority", { dbName: "memoir" }), MongooseModule.forFeature(
      [
        { name: 'Category', schema: CategorySchema }
      ]
    )
  ],
  controllers: [AppController, CategoryController],
  providers: [AppService, CategoryService],
})
export class AppModule { }
