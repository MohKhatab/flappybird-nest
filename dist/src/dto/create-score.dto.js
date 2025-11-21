"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateScoreDto = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const zod_1 = require("../generated/zod");
class CreateScoreDto extends (0, nestjs_zod_1.createZodDto)(zod_1.ScoreCreateInputSchema) {
}
exports.CreateScoreDto = CreateScoreDto;
//# sourceMappingURL=create-score.dto.js.map