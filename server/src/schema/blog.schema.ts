import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from "mongoose";
import { Category } from "./category.schema";

@Schema()
export class Blog {

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({
        required: true,
        type: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Category'
        }]
    })
    categoriesId: Category[];

    @Prop({
        required: true,
        type: Date
    })
    createdAt: Date

    @Prop({
        required: true,
        type: Date
    })
    updatedAt: Date

}

export const BlogSchema = SchemaFactory.createForClass(Blog)