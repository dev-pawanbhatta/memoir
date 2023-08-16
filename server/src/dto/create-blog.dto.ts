import { IsNotEmpty, IsString, IsArray } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateBlogDto {
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsArray()
    readonly categoriesId: Array<ObjectId>;
}