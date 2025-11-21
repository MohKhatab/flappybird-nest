import { DatabaseService } from './database/database.service';
import { CreateScoreDto } from './dto/create-score.dto';
export declare class AppService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    createScore(createScoreDto: CreateScoreDto): Promise<void>;
    findAll(): Promise<{
        id: number;
        name: string;
        score: number;
    }[]>;
}
