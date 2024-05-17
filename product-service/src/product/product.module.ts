import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product, ProductSchema } from './schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://pipo:Aa123654@pipo.gqdqli4.mongodb.net/product"),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
