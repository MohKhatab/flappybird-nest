import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { ZodValidationPipe } from 'nestjs-zod';
import { CreateScoreDto } from './dto/create-score.dto';

@Controller()
@UsePipes(ZodValidationPipe)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async create(@Body() createScoreDto: CreateScoreDto) {
    await this.appService.createScore(createScoreDto);
  }

  @Get()
  async findAll() {
    return await this.appService.findAll();
  }
}
