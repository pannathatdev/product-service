import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000); // เปลี่ยนพอร์ตจาก 3000 เป็น 8000
}
bootstrap();
