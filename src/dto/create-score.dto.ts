import { createZodDto } from 'nestjs-zod';
import { ScoreCreateInputSchema } from 'src/generated/zod';

export class CreateScoreDto extends createZodDto(ScoreCreateInputSchema) {}
