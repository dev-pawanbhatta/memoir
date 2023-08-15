import { IsNotEmpty, IsString, IsAlphanumeric } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    @IsAlphanumeric()
    readonly slug: string;
}