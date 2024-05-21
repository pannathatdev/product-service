// product.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './schemas/product.schema';

describe('ProductService', () => {
  let service: ProductService;
  let productModel: Model<Product>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: getModelToken(Product.name),
          useValue: {
            find: jest.fn().mockResolvedValue([]), // mock find() method
            findById: jest.fn().mockResolvedValue(null), // mock findById() method
            create: jest.fn().mockImplementation((dto) => dto), // mock create() method
            findByIdAndDelete: jest.fn().mockResolvedValue(null), // mock findByIdAndDelete() method
          },
        },
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
    productModel = module.get<Model<Product>>(getModelToken(Product.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // product.service.spec.ts
  it('should return an array of products', async () => {
    const mockProducts = [{ name: 'Product 1', description: 'Description 1', price: 100, quantity: 10 }];
    jest.spyOn(productModel, 'find').mockResolvedValue(mockProducts);

    const result = await service.findAll();
    expect(result).toEqual(mockProducts);
  });

  // Add more test cases here
});
