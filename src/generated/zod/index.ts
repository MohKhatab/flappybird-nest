import { z } from 'zod';
import type { Prisma } from '../prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum([
  'ReadUncommitted',
  'ReadCommitted',
  'RepeatableRead',
  'Serializable',
]);

export const ScoreScalarFieldEnumSchema = z.enum(['id', 'name', 'score']);

export const SortOrderSchema = z.enum(['asc', 'desc']);

export const QueryModeSchema = z.enum(['default', 'insensitive']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// SCORE SCHEMA
/////////////////////////////////////////

export const ScoreSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  score: z.number().int(),
});

export type Score = z.infer<typeof ScoreSchema>;

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// SCORE
//------------------------------------------------------

export const ScoreSelectSchema: z.ZodType<Prisma.ScoreSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    score: z.boolean().optional(),
  })
  .strict();

/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const ScoreWhereInputSchema: z.ZodType<Prisma.ScoreWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => ScoreWhereInputSchema),
        z.lazy(() => ScoreWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ScoreWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ScoreWhereInputSchema),
        z.lazy(() => ScoreWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    score: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  });

export const ScoreOrderByWithRelationInputSchema: z.ZodType<Prisma.ScoreOrderByWithRelationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    score: z.lazy(() => SortOrderSchema).optional(),
  });

export const ScoreWhereUniqueInputSchema: z.ZodType<Prisma.ScoreWhereUniqueInput> =
  z
    .object({
      id: z.number().int(),
    })
    .and(
      z.strictObject({
        id: z.number().int().optional(),
        AND: z
          .union([
            z.lazy(() => ScoreWhereInputSchema),
            z.lazy(() => ScoreWhereInputSchema).array(),
          ])
          .optional(),
        OR: z
          .lazy(() => ScoreWhereInputSchema)
          .array()
          .optional(),
        NOT: z
          .union([
            z.lazy(() => ScoreWhereInputSchema),
            z.lazy(() => ScoreWhereInputSchema).array(),
          ])
          .optional(),
        name: z
          .union([z.lazy(() => StringFilterSchema), z.string()])
          .optional(),
        score: z
          .union([z.lazy(() => IntFilterSchema), z.number().int()])
          .optional(),
      }),
    );

export const ScoreOrderByWithAggregationInputSchema: z.ZodType<Prisma.ScoreOrderByWithAggregationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    score: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => ScoreCountOrderByAggregateInputSchema).optional(),
    _avg: z.lazy(() => ScoreAvgOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => ScoreMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => ScoreMinOrderByAggregateInputSchema).optional(),
    _sum: z.lazy(() => ScoreSumOrderByAggregateInputSchema).optional(),
  });

export const ScoreScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ScoreScalarWhereWithAggregatesInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => ScoreScalarWhereWithAggregatesInputSchema),
        z.lazy(() => ScoreScalarWhereWithAggregatesInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ScoreScalarWhereWithAggregatesInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ScoreScalarWhereWithAggregatesInputSchema),
        z.lazy(() => ScoreScalarWhereWithAggregatesInputSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
      .optional(),
    name: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    score: z
      .union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
      .optional(),
  });

export const ScoreCreateInputSchema: z.ZodType<Prisma.ScoreCreateInput> =
  z.strictObject({
    name: z.string(),
    score: z.number().int(),
  });

export const ScoreUncheckedCreateInputSchema: z.ZodType<Prisma.ScoreUncheckedCreateInput> =
  z.strictObject({
    id: z.number().int().optional(),
    name: z.string(),
    score: z.number().int(),
  });

export const ScoreUpdateInputSchema: z.ZodType<Prisma.ScoreUpdateInput> =
  z.strictObject({
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    score: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
  });

export const ScoreUncheckedUpdateInputSchema: z.ZodType<Prisma.ScoreUncheckedUpdateInput> =
  z.strictObject({
    id: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    score: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
  });

export const ScoreCreateManyInputSchema: z.ZodType<Prisma.ScoreCreateManyInput> =
  z.strictObject({
    id: z.number().int().optional(),
    name: z.string(),
    score: z.number().int(),
  });

export const ScoreUpdateManyMutationInputSchema: z.ZodType<Prisma.ScoreUpdateManyMutationInput> =
  z.strictObject({
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    score: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
  });

export const ScoreUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ScoreUncheckedUpdateManyInput> =
  z.strictObject({
    id: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    score: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
  });

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
});

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> =
  z.strictObject({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  });

export const ScoreCountOrderByAggregateInputSchema: z.ZodType<Prisma.ScoreCountOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    score: z.lazy(() => SortOrderSchema).optional(),
  });

export const ScoreAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ScoreAvgOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    score: z.lazy(() => SortOrderSchema).optional(),
  });

export const ScoreMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ScoreMaxOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    score: z.lazy(() => SortOrderSchema).optional(),
  });

export const ScoreMinOrderByAggregateInputSchema: z.ZodType<Prisma.ScoreMinOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    score: z.lazy(() => SortOrderSchema).optional(),
  });

export const ScoreSumOrderByAggregateInputSchema: z.ZodType<Prisma.ScoreSumOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    score: z.lazy(() => SortOrderSchema).optional(),
  });

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> =
  z.strictObject({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)])
      .optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
    _sum: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedIntFilterSchema).optional(),
    _max: z.lazy(() => NestedIntFilterSchema).optional(),
  });

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> =
  z.strictObject({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)])
      .optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedStringFilterSchema).optional(),
    _max: z.lazy(() => NestedStringFilterSchema).optional(),
  });

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> =
  z.strictObject({
    set: z.string().optional(),
  });

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> =
  z.strictObject({
    set: z.number().optional(),
    increment: z.number().optional(),
    decrement: z.number().optional(),
    multiply: z.number().optional(),
    divide: z.number().optional(),
  });

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> =
  z.strictObject({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
  });

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> =
  z.strictObject({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  });

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> =
  z.strictObject({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)])
      .optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
    _sum: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedIntFilterSchema).optional(),
    _max: z.lazy(() => NestedIntFilterSchema).optional(),
  });

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> =
  z.strictObject({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedFloatFilterSchema)])
      .optional(),
  });

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> =
  z.strictObject({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)])
      .optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedStringFilterSchema).optional(),
    _max: z.lazy(() => NestedStringFilterSchema).optional(),
  });

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const ScoreFindFirstArgsSchema: z.ZodType<Prisma.ScoreFindFirstArgs> = z
  .object({
    select: ScoreSelectSchema.optional(),
    where: ScoreWhereInputSchema.optional(),
    orderBy: z
      .union([
        ScoreOrderByWithRelationInputSchema.array(),
        ScoreOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: ScoreWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([ScoreScalarFieldEnumSchema, ScoreScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const ScoreFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ScoreFindFirstOrThrowArgs> =
  z
    .object({
      select: ScoreSelectSchema.optional(),
      where: ScoreWhereInputSchema.optional(),
      orderBy: z
        .union([
          ScoreOrderByWithRelationInputSchema.array(),
          ScoreOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ScoreWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([ScoreScalarFieldEnumSchema, ScoreScalarFieldEnumSchema.array()])
        .optional(),
    })
    .strict();

export const ScoreFindManyArgsSchema: z.ZodType<Prisma.ScoreFindManyArgs> = z
  .object({
    select: ScoreSelectSchema.optional(),
    where: ScoreWhereInputSchema.optional(),
    orderBy: z
      .union([
        ScoreOrderByWithRelationInputSchema.array(),
        ScoreOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: ScoreWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([ScoreScalarFieldEnumSchema, ScoreScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const ScoreAggregateArgsSchema: z.ZodType<Prisma.ScoreAggregateArgs> = z
  .object({
    where: ScoreWhereInputSchema.optional(),
    orderBy: z
      .union([
        ScoreOrderByWithRelationInputSchema.array(),
        ScoreOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: ScoreWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const ScoreGroupByArgsSchema: z.ZodType<Prisma.ScoreGroupByArgs> = z
  .object({
    where: ScoreWhereInputSchema.optional(),
    orderBy: z
      .union([
        ScoreOrderByWithAggregationInputSchema.array(),
        ScoreOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: ScoreScalarFieldEnumSchema.array(),
    having: ScoreScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const ScoreFindUniqueArgsSchema: z.ZodType<Prisma.ScoreFindUniqueArgs> =
  z
    .object({
      select: ScoreSelectSchema.optional(),
      where: ScoreWhereUniqueInputSchema,
    })
    .strict();

export const ScoreFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ScoreFindUniqueOrThrowArgs> =
  z
    .object({
      select: ScoreSelectSchema.optional(),
      where: ScoreWhereUniqueInputSchema,
    })
    .strict();

export const ScoreCreateArgsSchema: z.ZodType<Prisma.ScoreCreateArgs> = z
  .object({
    select: ScoreSelectSchema.optional(),
    data: z.union([ScoreCreateInputSchema, ScoreUncheckedCreateInputSchema]),
  })
  .strict();

export const ScoreUpsertArgsSchema: z.ZodType<Prisma.ScoreUpsertArgs> = z
  .object({
    select: ScoreSelectSchema.optional(),
    where: ScoreWhereUniqueInputSchema,
    create: z.union([ScoreCreateInputSchema, ScoreUncheckedCreateInputSchema]),
    update: z.union([ScoreUpdateInputSchema, ScoreUncheckedUpdateInputSchema]),
  })
  .strict();

export const ScoreCreateManyArgsSchema: z.ZodType<Prisma.ScoreCreateManyArgs> =
  z
    .object({
      data: z.union([
        ScoreCreateManyInputSchema,
        ScoreCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ScoreCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ScoreCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        ScoreCreateManyInputSchema,
        ScoreCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ScoreDeleteArgsSchema: z.ZodType<Prisma.ScoreDeleteArgs> = z
  .object({
    select: ScoreSelectSchema.optional(),
    where: ScoreWhereUniqueInputSchema,
  })
  .strict();

export const ScoreUpdateArgsSchema: z.ZodType<Prisma.ScoreUpdateArgs> = z
  .object({
    select: ScoreSelectSchema.optional(),
    data: z.union([ScoreUpdateInputSchema, ScoreUncheckedUpdateInputSchema]),
    where: ScoreWhereUniqueInputSchema,
  })
  .strict();

export const ScoreUpdateManyArgsSchema: z.ZodType<Prisma.ScoreUpdateManyArgs> =
  z
    .object({
      data: z.union([
        ScoreUpdateManyMutationInputSchema,
        ScoreUncheckedUpdateManyInputSchema,
      ]),
      where: ScoreWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const ScoreUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ScoreUpdateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        ScoreUpdateManyMutationInputSchema,
        ScoreUncheckedUpdateManyInputSchema,
      ]),
      where: ScoreWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const ScoreDeleteManyArgsSchema: z.ZodType<Prisma.ScoreDeleteManyArgs> =
  z
    .object({
      where: ScoreWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();
