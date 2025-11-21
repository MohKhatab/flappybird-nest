import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database/database.service';
import { CreateScoreDto } from './dto/create-score.dto';
import { Prisma } from './generated/prisma/client';

@Injectable()
export class AppService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createScore(createScoreDto: CreateScoreDto) {
    await this.databaseService.score.create({
      data: createScoreDto as Prisma.ScoreCreateInput,
    });
  }

  async findAll() {
    return await this.databaseService.score.findMany({
      take: 10,
      orderBy: {
        score: 'desc',
      },
    });
  }
}
