import { Body, Controller, Get, Post, Req, Request } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

interface RequestParams {
  name: string;
}

@Controller('categories')
export class CategoryController {
  constructor(
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
  ) {}

  @Get()
  async index() {
    return await this.categoryRepo.find();
  }

  @Post('/create')
  async create(@Body() categoryBody: RequestParams) {
    const category = await this.categoryRepo.create(categoryBody);
    return this.categoryRepo.save(category);
  }
}
