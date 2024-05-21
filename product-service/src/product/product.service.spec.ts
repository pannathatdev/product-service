import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { getModelToken } from '@nestjs/mongoose';
import { Product } from './product.interface';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: getModelToken('Product'),
          useValue: {
            find: jest.fn().mockResolvedValue([
              { _id: '1', name: 'Product 1', price: 100, description: 'Description 1', quantity: 10 },
              { _id: '2', name: 'Product 2', price: 200, description: 'Description 2', quantity: 20 },
            ]),
            findById: jest.fn().mockImplementation((id: string) => {
              const products: Product[] = [
                { _id: '1', name: 'Product 1', price: 100, description: 'Description 1', quantity: 10 },
                { _id: '2', name: 'Product 2', price: 200, description: 'Description 2', quantity: 20 },
              ];
              return Promise.resolve(products.find(product => product._id === id));
            }),
            // Add other mock methods as needed
          },
        },
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of products', async () => {
    const products = await service.findAll();
    expect(products).toHaveLength(2);
  });

  it('should return a product by ID', async () => {
    const product = await service.findOne('1');
    expect(product).toEqual({ _id: '1', name: 'Product 1', price: 100, description: 'Description 1', quantity: 10 });
  });

  // Add more unit tests as needed
});
