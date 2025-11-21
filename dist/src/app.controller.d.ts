import { AppService } from './app.service';
import { CreateScoreDto } from './dto/create-score.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    create(createScoreDto: CreateScoreDto): Promise<void>;
    findAll(): Promise<{
        id: number;
        name: string;
        score: number;
    }[]>;
}
