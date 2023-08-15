import { IsNotEmpty, IsString, IsAlphanumeric } from "class-validator";

export class UpdateCategoryDto {
    readonly name: string;
    readonly slug: string;
}