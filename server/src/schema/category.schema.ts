import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";


@Schema()

export class Category {
    @Prop(
        {
            required: true,
            type: String,
        }
    )
    name: string;

    @Prop(
        {
            required: true,
            type: String,
        }
    )
    slug: string;

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;
}

export const CategorySchema = SchemaFactory.createForClass(Category)