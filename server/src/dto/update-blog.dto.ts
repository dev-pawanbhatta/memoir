import { IsNotEmpty, IsString, IsArray } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateBlogDto {
    @IsString()
    readonly title: string;

    @IsString()
    readonly description: string;

    @IsArray()
    readonly categoriesId: Array<ObjectId>;
}