import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppModule } from './app.module';

describe('AppController', () => {
    let appController: AppController;

    beforeEach(async () => {
      const app: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
        controllers: [AppController],
      }).compile();
  
      appController = app.get<AppController>(AppController);
    });

    it('root should return "Hello World!"', () => {
      const result = appController.getHello();
      expect(result).toBe('Hello World!');
    });
  });
