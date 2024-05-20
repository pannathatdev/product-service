import { Controller, Post , Get } from '@nestjs/common';

@Controller('api')
export class AppController {
  @Post('create')
  create(): string {
    return 'This action adds a new item';
  }
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
