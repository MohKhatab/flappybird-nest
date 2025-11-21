"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreDeleteManyArgsSchema = exports.ScoreUpdateManyAndReturnArgsSchema = exports.ScoreUpdateManyArgsSchema = exports.ScoreUpdateArgsSchema = exports.ScoreDeleteArgsSchema = exports.ScoreCreateManyAndReturnArgsSchema = exports.ScoreCreateManyArgsSchema = exports.ScoreUpsertArgsSchema = exports.ScoreCreateArgsSchema = exports.ScoreFindUniqueOrThrowArgsSchema = exports.ScoreFindUniqueArgsSchema = exports.ScoreGroupByArgsSchema = exports.ScoreAggregateArgsSchema = exports.ScoreFindManyArgsSchema = exports.ScoreFindFirstOrThrowArgsSchema = exports.ScoreFindFirstArgsSchema = exports.NestedStringWithAggregatesFilterSchema = exports.NestedFloatFilterSchema = exports.NestedIntWithAggregatesFilterSchema = exports.NestedStringFilterSchema = exports.NestedIntFilterSchema = exports.IntFieldUpdateOperationsInputSchema = exports.StringFieldUpdateOperationsInputSchema = exports.StringWithAggregatesFilterSchema = exports.IntWithAggregatesFilterSchema = exports.ScoreSumOrderByAggregateInputSchema = exports.ScoreMinOrderByAggregateInputSchema = exports.ScoreMaxOrderByAggregateInputSchema = exports.ScoreAvgOrderByAggregateInputSchema = exports.ScoreCountOrderByAggregateInputSchema = exports.StringFilterSchema = exports.IntFilterSchema = exports.ScoreUncheckedUpdateManyInputSchema = exports.ScoreUpdateManyMutationInputSchema = exports.ScoreCreateManyInputSchema = exports.ScoreUncheckedUpdateInputSchema = exports.ScoreUpdateInputSchema = exports.ScoreUncheckedCreateInputSchema = exports.ScoreCreateInputSchema = exports.ScoreScalarWhereWithAggregatesInputSchema = exports.ScoreOrderByWithAggregationInputSchema = exports.ScoreWhereUniqueInputSchema = exports.ScoreOrderByWithRelationInputSchema = exports.ScoreWhereInputSchema = exports.ScoreSelectSchema = exports.ScoreSchema = exports.QueryModeSchema = exports.SortOrderSchema = exports.ScoreScalarFieldEnumSchema = exports.TransactionIsolationLevelSchema = void 0;
const zod_1 = require("zod");
exports.TransactionIsolationLevelSchema = zod_1.z.enum([
    'ReadUncommitted',
    'ReadCommitted',
    'RepeatableRead',
    'Serializable',
]);
exports.ScoreScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'score']);
exports.SortOrderSchema = zod_1.z.enum(['asc', 'desc']);
exports.QueryModeSchema = zod_1.z.enum(['default', 'insensitive']);
exports.ScoreSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    name: zod_1.z.string(),
    score: zod_1.z.number().int(),
});
exports.ScoreSelectSchema = zod_1.z
    .object({
    id: zod_1.z.boolean().optional(),
    name: zod_1.z.boolean().optional(),
    score: zod_1.z.boolean().optional(),
})
    .strict();
exports.ScoreWhereInputSchema = zod_1.z.strictObject({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.ScoreWhereInputSchema),
        zod_1.z.lazy(() => exports.ScoreWhereInputSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.ScoreWhereInputSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.ScoreWhereInputSchema),
        zod_1.z.lazy(() => exports.ScoreWhereInputSchema).array(),
    ])
        .optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    name: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    score: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
});
exports.ScoreOrderByWithRelationInputSchema = zod_1.z.strictObject({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    score: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
});
exports.ScoreWhereUniqueInputSchema = zod_1.z
    .object({
    id: zod_1.z.number().int(),
})
    .and(zod_1.z.strictObject({
    id: zod_1.z.number().int().optional(),
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.ScoreWhereInputSchema),
        zod_1.z.lazy(() => exports.ScoreWhereInputSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.ScoreWhereInputSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.ScoreWhereInputSchema),
        zod_1.z.lazy(() => exports.ScoreWhereInputSchema).array(),
    ])
        .optional(),
    name: zod_1.z
        .union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()])
        .optional(),
    score: zod_1.z
        .union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number().int()])
        .optional(),
}));
exports.ScoreOrderByWithAggregationInputSchema = zod_1.z.strictObject({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    score: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    _count: zod_1.z.lazy(() => exports.ScoreCountOrderByAggregateInputSchema).optional(),
    _avg: zod_1.z.lazy(() => exports.ScoreAvgOrderByAggregateInputSchema).optional(),
    _max: zod_1.z.lazy(() => exports.ScoreMaxOrderByAggregateInputSchema).optional(),
    _min: zod_1.z.lazy(() => exports.ScoreMinOrderByAggregateInputSchema).optional(),
    _sum: zod_1.z.lazy(() => exports.ScoreSumOrderByAggregateInputSchema).optional(),
});
exports.ScoreScalarWhereWithAggregatesInputSchema = zod_1.z.strictObject({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.ScoreScalarWhereWithAggregatesInputSchema),
        zod_1.z.lazy(() => exports.ScoreScalarWhereWithAggregatesInputSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.ScoreScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.ScoreScalarWhereWithAggregatesInputSchema),
        zod_1.z.lazy(() => exports.ScoreScalarWhereWithAggregatesInputSchema).array(),
    ])
        .optional(),
    id: zod_1.z
        .union([zod_1.z.lazy(() => exports.IntWithAggregatesFilterSchema), zod_1.z.number()])
        .optional(),
    name: zod_1.z
        .union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()])
        .optional(),
    score: zod_1.z
        .union([zod_1.z.lazy(() => exports.IntWithAggregatesFilterSchema), zod_1.z.number()])
        .optional(),
});
exports.ScoreCreateInputSchema = zod_1.z.strictObject({
    name: zod_1.z.string(),
    score: zod_1.z.number().int(),
});
exports.ScoreUncheckedCreateInputSchema = zod_1.z.strictObject({
    id: zod_1.z.number().int().optional(),
    name: zod_1.z.string(),
    score: zod_1.z.number().int(),
});
exports.ScoreUpdateInputSchema = zod_1.z.strictObject({
    name: zod_1.z
        .union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)])
        .optional(),
    score: zod_1.z
        .union([
        zod_1.z.number().int(),
        zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema),
    ])
        .optional(),
});
exports.ScoreUncheckedUpdateInputSchema = zod_1.z.strictObject({
    id: zod_1.z
        .union([
        zod_1.z.number().int(),
        zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema),
    ])
        .optional(),
    name: zod_1.z
        .union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)])
        .optional(),
    score: zod_1.z
        .union([
        zod_1.z.number().int(),
        zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema),
    ])
        .optional(),
});
exports.ScoreCreateManyInputSchema = zod_1.z.strictObject({
    id: zod_1.z.number().int().optional(),
    name: zod_1.z.string(),
    score: zod_1.z.number().int(),
});
exports.ScoreUpdateManyMutationInputSchema = zod_1.z.strictObject({
    name: zod_1.z
        .union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)])
        .optional(),
    score: zod_1.z
        .union([
        zod_1.z.number().int(),
        zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema),
    ])
        .optional(),
});
exports.ScoreUncheckedUpdateManyInputSchema = zod_1.z.strictObject({
    id: zod_1.z
        .union([
        zod_1.z.number().int(),
        zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema),
    ])
        .optional(),
    name: zod_1.z
        .union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)])
        .optional(),
    score: zod_1.z
        .union([
        zod_1.z.number().int(),
        zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema),
    ])
        .optional(),
});
exports.IntFilterSchema = zod_1.z.strictObject({
    equals: zod_1.z.number().optional(),
    in: zod_1.z.number().array().optional(),
    notIn: zod_1.z.number().array().optional(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z.union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedIntFilterSchema)]).optional(),
});
exports.StringFilterSchema = zod_1.z.strictObject({
    equals: zod_1.z.string().optional(),
    in: zod_1.z.string().array().optional(),
    notIn: zod_1.z.string().array().optional(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    mode: zod_1.z.lazy(() => exports.QueryModeSchema).optional(),
    not: zod_1.z
        .union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringFilterSchema)])
        .optional(),
});
exports.ScoreCountOrderByAggregateInputSchema = zod_1.z.strictObject({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    score: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
});
exports.ScoreAvgOrderByAggregateInputSchema = zod_1.z.strictObject({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    score: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
});
exports.ScoreMaxOrderByAggregateInputSchema = zod_1.z.strictObject({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    score: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
});
exports.ScoreMinOrderByAggregateInputSchema = zod_1.z.strictObject({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    score: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
});
exports.ScoreSumOrderByAggregateInputSchema = zod_1.z.strictObject({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    score: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
});
exports.IntWithAggregatesFilterSchema = zod_1.z.strictObject({
    equals: zod_1.z.number().optional(),
    in: zod_1.z.number().array().optional(),
    notIn: zod_1.z.number().array().optional(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z
        .union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedIntWithAggregatesFilterSchema)])
        .optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _avg: zod_1.z.lazy(() => exports.NestedFloatFilterSchema).optional(),
    _sum: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
});
exports.StringWithAggregatesFilterSchema = zod_1.z.strictObject({
    equals: zod_1.z.string().optional(),
    in: zod_1.z.string().array().optional(),
    notIn: zod_1.z.string().array().optional(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    mode: zod_1.z.lazy(() => exports.QueryModeSchema).optional(),
    not: zod_1.z
        .union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringWithAggregatesFilterSchema)])
        .optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedStringFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedStringFilterSchema).optional(),
});
exports.StringFieldUpdateOperationsInputSchema = zod_1.z.strictObject({
    set: zod_1.z.string().optional(),
});
exports.IntFieldUpdateOperationsInputSchema = zod_1.z.strictObject({
    set: zod_1.z.number().optional(),
    increment: zod_1.z.number().optional(),
    decrement: zod_1.z.number().optional(),
    multiply: zod_1.z.number().optional(),
    divide: zod_1.z.number().optional(),
});
exports.NestedIntFilterSchema = zod_1.z.strictObject({
    equals: zod_1.z.number().optional(),
    in: zod_1.z.number().array().optional(),
    notIn: zod_1.z.number().array().optional(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z.union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedIntFilterSchema)]).optional(),
});
exports.NestedStringFilterSchema = zod_1.z.strictObject({
    equals: zod_1.z.string().optional(),
    in: zod_1.z.string().array().optional(),
    notIn: zod_1.z.string().array().optional(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    not: zod_1.z
        .union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringFilterSchema)])
        .optional(),
});
exports.NestedIntWithAggregatesFilterSchema = zod_1.z.strictObject({
    equals: zod_1.z.number().optional(),
    in: zod_1.z.number().array().optional(),
    notIn: zod_1.z.number().array().optional(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z
        .union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedIntWithAggregatesFilterSchema)])
        .optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _avg: zod_1.z.lazy(() => exports.NestedFloatFilterSchema).optional(),
    _sum: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
});
exports.NestedFloatFilterSchema = zod_1.z.strictObject({
    equals: zod_1.z.number().optional(),
    in: zod_1.z.number().array().optional(),
    notIn: zod_1.z.number().array().optional(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z
        .union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedFloatFilterSchema)])
        .optional(),
});
exports.NestedStringWithAggregatesFilterSchema = zod_1.z.strictObject({
    equals: zod_1.z.string().optional(),
    in: zod_1.z.string().array().optional(),
    notIn: zod_1.z.string().array().optional(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    not: zod_1.z
        .union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringWithAggregatesFilterSchema)])
        .optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedStringFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedStringFilterSchema).optional(),
});
exports.ScoreFindFirstArgsSchema = zod_1.z
    .object({
    select: exports.ScoreSelectSchema.optional(),
    where: exports.ScoreWhereInputSchema.optional(),
    orderBy: zod_1.z
        .union([
        exports.ScoreOrderByWithRelationInputSchema.array(),
        exports.ScoreOrderByWithRelationInputSchema,
    ])
        .optional(),
    cursor: exports.ScoreWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z
        .union([exports.ScoreScalarFieldEnumSchema, exports.ScoreScalarFieldEnumSchema.array()])
        .optional(),
})
    .strict();
exports.ScoreFindFirstOrThrowArgsSchema = zod_1.z
    .object({
    select: exports.ScoreSelectSchema.optional(),
    where: exports.ScoreWhereInputSchema.optional(),
    orderBy: zod_1.z
        .union([
        exports.ScoreOrderByWithRelationInputSchema.array(),
        exports.ScoreOrderByWithRelationInputSchema,
    ])
        .optional(),
    cursor: exports.ScoreWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z
        .union([exports.ScoreScalarFieldEnumSchema, exports.ScoreScalarFieldEnumSchema.array()])
        .optional(),
})
    .strict();
exports.ScoreFindManyArgsSchema = zod_1.z
    .object({
    select: exports.ScoreSelectSchema.optional(),
    where: exports.ScoreWhereInputSchema.optional(),
    orderBy: zod_1.z
        .union([
        exports.ScoreOrderByWithRelationInputSchema.array(),
        exports.ScoreOrderByWithRelationInputSchema,
    ])
        .optional(),
    cursor: exports.ScoreWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z
        .union([exports.ScoreScalarFieldEnumSchema, exports.ScoreScalarFieldEnumSchema.array()])
        .optional(),
})
    .strict();
exports.ScoreAggregateArgsSchema = zod_1.z
    .object({
    where: exports.ScoreWhereInputSchema.optional(),
    orderBy: zod_1.z
        .union([
        exports.ScoreOrderByWithRelationInputSchema.array(),
        exports.ScoreOrderByWithRelationInputSchema,
    ])
        .optional(),
    cursor: exports.ScoreWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
})
    .strict();
exports.ScoreGroupByArgsSchema = zod_1.z
    .object({
    where: exports.ScoreWhereInputSchema.optional(),
    orderBy: zod_1.z
        .union([
        exports.ScoreOrderByWithAggregationInputSchema.array(),
        exports.ScoreOrderByWithAggregationInputSchema,
    ])
        .optional(),
    by: exports.ScoreScalarFieldEnumSchema.array(),
    having: exports.ScoreScalarWhereWithAggregatesInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
})
    .strict();
exports.ScoreFindUniqueArgsSchema = zod_1.z
    .object({
    select: exports.ScoreSelectSchema.optional(),
    where: exports.ScoreWhereUniqueInputSchema,
})
    .strict();
exports.ScoreFindUniqueOrThrowArgsSchema = zod_1.z
    .object({
    select: exports.ScoreSelectSchema.optional(),
    where: exports.ScoreWhereUniqueInputSchema,
})
    .strict();
exports.ScoreCreateArgsSchema = zod_1.z
    .object({
    select: exports.ScoreSelectSchema.optional(),
    data: zod_1.z.union([exports.ScoreCreateInputSchema, exports.ScoreUncheckedCreateInputSchema]),
})
    .strict();
exports.ScoreUpsertArgsSchema = zod_1.z
    .object({
    select: exports.ScoreSelectSchema.optional(),
    where: exports.ScoreWhereUniqueInputSchema,
    create: zod_1.z.union([exports.ScoreCreateInputSchema, exports.ScoreUncheckedCreateInputSchema]),
    update: zod_1.z.union([exports.ScoreUpdateInputSchema, exports.ScoreUncheckedUpdateInputSchema]),
})
    .strict();
exports.ScoreCreateManyArgsSchema = zod_1.z
    .object({
    data: zod_1.z.union([
        exports.ScoreCreateManyInputSchema,
        exports.ScoreCreateManyInputSchema.array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.ScoreCreateManyAndReturnArgsSchema = zod_1.z
    .object({
    data: zod_1.z.union([
        exports.ScoreCreateManyInputSchema,
        exports.ScoreCreateManyInputSchema.array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.ScoreDeleteArgsSchema = zod_1.z
    .object({
    select: exports.ScoreSelectSchema.optional(),
    where: exports.ScoreWhereUniqueInputSchema,
})
    .strict();
exports.ScoreUpdateArgsSchema = zod_1.z
    .object({
    select: exports.ScoreSelectSchema.optional(),
    data: zod_1.z.union([exports.ScoreUpdateInputSchema, exports.ScoreUncheckedUpdateInputSchema]),
    where: exports.ScoreWhereUniqueInputSchema,
})
    .strict();
exports.ScoreUpdateManyArgsSchema = zod_1.z
    .object({
    data: zod_1.z.union([
        exports.ScoreUpdateManyMutationInputSchema,
        exports.ScoreUncheckedUpdateManyInputSchema,
    ]),
    where: exports.ScoreWhereInputSchema.optional(),
    limit: zod_1.z.number().optional(),
})
    .strict();
exports.ScoreUpdateManyAndReturnArgsSchema = zod_1.z
    .object({
    data: zod_1.z.union([
        exports.ScoreUpdateManyMutationInputSchema,
        exports.ScoreUncheckedUpdateManyInputSchema,
    ]),
    where: exports.ScoreWhereInputSchema.optional(),
    limit: zod_1.z.number().optional(),
})
    .strict();
exports.ScoreDeleteManyArgsSchema = zod_1.z
    .object({
    where: exports.ScoreWhereInputSchema.optional(),
    limit: zod_1.z.number().optional(),
})
    .strict();
//# sourceMappingURL=index.js.map