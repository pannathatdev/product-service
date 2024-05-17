import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { ProductSchema } from './product/schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://pipo:Aa123654@pipo.gqdqli4.mongodb.net/product"),
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
