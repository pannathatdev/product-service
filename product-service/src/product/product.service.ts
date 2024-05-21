// product.service.ts
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { CreateProductDto } from './create-product.dto';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  async findAll(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  async findOne(id: string): Promise<Product> {
    return await this.productModel.findById(id).exec();
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const { name, description, price, quantity } = createProductDto;
    const newProduct = new this.productModel({ name, description, price, quantity });
    return await newProduct.save();
}

  async delete(id: string): Promise<Product> {
    return await this.productModel.findByIdAndDelete(id);
}

}
