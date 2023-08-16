import { Document, ObjectId } from "mongoose";

export class IBlog extends Document {
    readonly title: string;
    readonly description: string;
    readonly categoriesId: Array<ObjectId>
}