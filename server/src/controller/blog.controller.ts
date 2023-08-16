import { Controller, Post, Res, Body, Get, Param, Delete } from '@nestjs/common';
import { CreateBlogDto } from 'src/dto/create-blog.dto';
import { BlogService } from 'src/service/blog.service';


@Controller('blogs')
export class BlogController {
    constructor(private readonly blogService: BlogService) { }

    @Post()
    async createBlog(@Body() data: CreateBlogDto, @Res() res) {
        try {
            const newBlog = await this.blogService.createBlog(data);
            return res.status(200).json({
                status: true,
                message: "Blog added successfully",
                data: newBlog
            })
        } catch (err) {
            console.log(err);
            return res.status(400).json({
                message: err?.message || "Something went wrong",
                stataus: false
            })
        }
    }


    @Get()
    async getAllBlogs(@Res() res) {
        try {
            const blogs = await this.blogService.getAll()
            if (!blogs) {
                throw Error("No Blogs Found");
            };
            return res.status(201).send({
                status: true,
                blogs: blogs
            });
        } catch (err) {
            console.log(err);
            return res.status(400).json({
                message: err?.message || "Something went wrong",
                status: false
            })
        }
    }

    @Get('/:id')
    async getOneBlogById(@Res() res, @Param("id") id: string) {
        try {
            const blog = await this.blogService.getOneBlogById(id)
            if (!blog) {
                throw Error("No Blogs Found");
            };
            return res.status(201).send({
                status: true,
                blog: blog
            });
        } catch (err) {
            console.log(err);
            return res.status(400).json({
                message: err?.message || "Something went wrong",
                status: false
            })
        }
    }

    @Delete('/:id')
    async deleteBlog(@Res() res, @Param("id") id: string) {
        try {
            let deleted = await this.blogService.deleteBlog(id);
            return res.status(200).json({
                status: true,
                message: "Deleted Successfully"
            })
        } catch (err) {
            console.log(err)
            return res.status(500).json({ "error": true, "msg": "Internal Server error" })
        }
    }
}