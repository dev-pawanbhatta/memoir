import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { ICategory } from 'src/interface/category.interface';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';

@Injectable()
export class CategoryService {
    constructor(@InjectModel('Category') private categoryModel: Model<ICategory>) { }

    async createCategory(createCategoryDto: CreateCategoryDto): Promise<ICategory> {
        const newCategory = await new this.categoryModel({ ...createCategoryDto, createdAt: Date.now(), updatedAt: Date.now() });
        return newCategory.save();
    }

    async checkUniqueness(slug: String) {
        const count = await this.categoryModel.countDocuments({ 'slug': slug });
        if (count == 0) {
            return true;
        } else {
            return false;
        }
    }

    async getAllCategories(): Promise<object> {
        const categories = await this.categoryModel.find();
        return categories;
    }
    async getOneCategoryByCategoryId(id: string): Promise<object> {
        const category = await this.categoryModel.findById(id);
        return category;
    }

    async updateCategory(data: object, id: string): Promise<object> {
        const category = await this.categoryModel.findByIdAndUpdate(id, { ...data, updatedAt: Date.now() }, { new: true });
        if (!category) {
            throw new NotFoundException(`Category #${id} not found`);
        }
        return category;
    }

    async deleteCategory(id: string) {
        const deletedCategory = await this.categoryModel.findByIdAndDelete(id);
        //return `This action removes a #${id} category`;
        if (!deletedCategory) {
            throw new NotFoundException(`Category #${id} not found`);
        }
        return deletedCategory;
    }
}
