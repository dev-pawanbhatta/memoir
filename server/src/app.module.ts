import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './schema/category.schema';
import { CategoryService } from './service/category.service';
import { CategoryController } from './controller/category.controller';
import { BlogSchema } from './schema/blog.schema';
import { BlogController } from './controller/blog.controller';
import { BlogService } from './service/blog.service';
require('dotenv').config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL, { dbName: "memoir" }), MongooseModule.forFeature(
      [
        { name: 'Category', schema: CategorySchema },
        { name: 'Blog', schema: BlogSchema }
      ]
    )
  ],
  controllers: [AppController, CategoryController, BlogController],
  providers: [AppService, CategoryService, BlogService],
})
export class AppModule { }
