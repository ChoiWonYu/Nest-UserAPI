import { Controller, Get } from '@nestjs/common';
import { Req } from '@nestjs/common/decorators';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello() {
    return process.env.DATABASE_HOST;
  }
}
