import { Controller, Get, Query } from '@nestjs/common';
import { Param, Req } from '@nestjs/common/decorators';
import { DefaultValuePipe, ParseIntPipe } from '@nestjs/common/pipes';
import { AppService } from './app.service';
import { ValidationPipe } from './validation.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get(':id')
  findOne(@Param('id', ValidationPipe) id: number) {
    console.log(id);
  }
}
