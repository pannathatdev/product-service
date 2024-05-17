import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { ProductServiceMock } from './product.service.mock';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService],
    })
    .overrideProvider(ProductService)
    .useClass(ProductServiceMock)
    .compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Add more test cases as needed
});
