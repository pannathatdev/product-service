import { Controller, Post } from '@nestjs/common';

@Controller('api')
export class AppController {
  @Post('create')
  create(): string {
    return 'This action adds a new item';
  }
}
