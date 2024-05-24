import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './create-product.dto';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('load')
  async loadProducts(@Body() products: CreateProductDto[]) {
    return await this.productService.loadMockup(products);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }
}
