import { Controller, Get } from '@nestjs/common';

@Controller('categories')
export class CategoryController {
  @Get()
  index() {
    return 'lista';
  }
}
