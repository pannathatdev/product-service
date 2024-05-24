// product.service.ts
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import axios from 'axios';
import { CreateProductDto } from './create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) { }

  async findAll(): Promise<Product[]> {
    return await this.productModel.find();
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

  async loadMockup(products: CreateProductDto[]): Promise<Product[]> {
    return await this.productModel.insertMany(products);
  }
  async loadMockupData(products: any) {
    try {
      const orderServiceUrl = 'http://order-service:9000/orders/load';
      await axios.post(orderServiceUrl, products);
      console.log('Mockup data loaded successfully.');
    } catch (error) {
      console.error('Failed to load mockup data:', error.message);
      throw error;
    }
  }
}
