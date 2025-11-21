import { OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'src/generated/prisma/client';
import { ConfigService } from '@nestjs/config';
export declare class DatabaseService extends PrismaClient implements OnModuleInit {
    private readonly configService;
    constructor(configService: ConfigService);
    onModuleInit(): Promise<void>;
}
