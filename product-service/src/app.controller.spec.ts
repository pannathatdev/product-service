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
    expect(appController.getHello()).toBe('Hello World!');
  });
});

// เพิ่ม timeout ที่ 10 วินาที (10000 milliseconds) ให้กับทุกการทดสอบในไฟล์นี้
jest.setTimeout(10000);
