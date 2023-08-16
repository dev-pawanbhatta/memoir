import { Injectable } from '@nestjs/common';
import { IBlog } from 'src/interface/blog.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateBlogDto } from 'src/dto/create-blog.dto';


@Injectable()
export class BlogService {
    constructor(@InjectModel('Blog') private blogModel: Model<IBlog>) { }

    async createBlog(data: CreateBlogDto): Promise<object> {
        const newBlog = await new this.blogModel({ ...data, createdAt: Date.now(), updatedAt: Date.now() })
        return (await newBlog).save();
    }

    async getAll(): Promise<object> {
        const blogs = await this.blogModel.find().populate('categoriesId');
        return blogs;
    }

    async getOneBlogById(id: string) {
        const blog = await this.blogModel.findById(id).populate('categoriesId');
        if (!blog) {
            throw Error("No such a record found");
        }
        else {
            return blog;
        }
    }

    async deleteBlog(id: string) {
        const deletedBlog = await this.blogModel.findByIdAndDelete(id)
        return deletedBlog;
    }

}