import { Controller, Post, Res, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { CategoryService } from '../service/category.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { Category } from '../schema/category.schema';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Post()
    async createCategory(@Res() response, @Body() createCategoryDto: CreateCategoryDto) {
        try {
            const isUnique = await this.categoryService.checkUniqueness(createCategoryDto.slug);
            if (isUnique) {
                const newCategory = await this.categoryService.createCategory(createCategoryDto);
                return response.status(200).json({
                    message: 'New category created',
                    data: [newCategory]
                })
            }
            else {
                return response.status(400).json({
                    statusCode: 400,
                    message: 'Slug already exists',
                })
            }
        } catch (err) {
            console.log(err);
            return response.status(400).json({
                statusCode: 400,
                message: 'Error: Category not created!',
                error: 'Bad Request'
            })
        }

    }

    @Get()
    async getAllCategories(@Res() response) {
        try {
            const categories = await this.categoryService.getAllCategories();
            return response.status(200).json(
                categories
            )
        } catch (err) {
            console.log(err)
            return response.status(400).json({
                statusCode: 400,
                error: 'Bad Request'
            })
        }
    }

    @Get('/:id')
    async getOneCategoryById(@Res() response, @Param("id") id: string) {
        try {
            let category = await this.categoryService.getOneCategoryByCategoryId(id);
            if (!category) {
                throw Error('No such a category');
            };
            return response.status(200).json([category])
        } catch {
            return response.status(501).send(`The requested resource is unavailable`)
        }
    }

    @Put('/:id')
    async updateCategory(@Body() bodyData: UpdateCategoryDto, @Res() res, @Param("id") id) {
        try {
            const isNameExists = bodyData.name !== undefined;
            const isSlugExists = bodyData.slug !== undefined;

            if (isNameExists && isSlugExists) {
                if (bodyData.name != "" && bodyData.slug != "") {
                    const isUnique = await this.categoryService.checkUniqueness(bodyData.slug);
                    if (isUnique) {
                        const newData = {
                            name: bodyData.name,
                            slug: bodyData.slug
                        }
                        const updatedCategory = await this.categoryService.updateCategory(newData, id);
                        return res.status(200).json({
                            statusCode: "200",
                            data: updatedCategory
                        })
                    }
                    else {
                        return res.status(400).json({
                            statusCode: "400",
                            error: "Slug is already taken"
                        })
                    }

                }
                else {
                    return res.status(400).json({
                        statusCode: "400",
                        error: "Fields can not be blank"
                    })
                }
            }
            else if (isNameExists) {
                if (bodyData.name != "") {
                    const newData = {
                        name: bodyData.name,
                    }
                    const updatedCategory = await this.categoryService.updateCategory(newData, id);
                    return res.status(200).json({
                        statusCode: "200",
                        data: updatedCategory
                    })
                }
                else {
                    return res.status(400).json({
                        statusCode: "400",
                        error: "Fields can not be blank"
                    })
                }
            }
            else if (isSlugExists) {
                if (bodyData.slug != "") {
                    const isUnique = await this.categoryService.checkUniqueness(bodyData.slug);
                    if (isUnique) {
                        const newData = {
                            slug: bodyData.slug,
                        }
                        const updatedCategory = await this.categoryService.updateCategory(newData, id);
                        return res.status(200).json({
                            statusCode: "200",
                            data: updatedCategory
                        })
                    }
                    else {
                        return res.status(400).json({
                            statusCode: "400",
                            error: "Slug is already taken"
                        })
                    }
                }
                else {
                    return res.status(400).json({
                        statusCode: "400",
                        error: "Fields can not be blank"
                    })
                }
            }
            else {
                return res.status(400).json({
                    statusCode: "200",
                    error: "You can't send nothing to update"
                })
            }


        } catch (err) {
            console.log(err);
            return res.status(400).json({
                statusCode: 400,
                message: 'Error: Category not updated!',
                error: 'Bad Request'
            })
        }

    }


    @Delete('/:id')
    async deleteCategory(@Param("id") id, @Res() res) {
        try {
            const deleted = await this.categoryService.deleteCategory(id);
            if (deleted) {
                return res.status(200).json({
                    message: 'Category deleted',
                    data: [deleted]
                })
            }
            else {
                return res.status(400).json({
                    message: 'Category not deleted',
                })
            }
        } catch (err) {
            console.log(err);
            return res.status(400).json({
                statusCode: 400,
                message: 'Error: Category not deleted!',
                error: 'Bad Request'
            })
        }
    }
}