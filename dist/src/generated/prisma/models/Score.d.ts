import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ScoreModel = runtime.Types.Result.DefaultSelection<Prisma.$ScorePayload>;
export type AggregateScore = {
    _count: ScoreCountAggregateOutputType | null;
    _avg: ScoreAvgAggregateOutputType | null;
    _sum: ScoreSumAggregateOutputType | null;
    _min: ScoreMinAggregateOutputType | null;
    _max: ScoreMaxAggregateOutputType | null;
};
export type ScoreAvgAggregateOutputType = {
    id: number | null;
    score: number | null;
};
export type ScoreSumAggregateOutputType = {
    id: number | null;
    score: number | null;
};
export type ScoreMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    score: number | null;
};
export type ScoreMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    score: number | null;
};
export type ScoreCountAggregateOutputType = {
    id: number;
    name: number;
    score: number;
    _all: number;
};
export type ScoreAvgAggregateInputType = {
    id?: true;
    score?: true;
};
export type ScoreSumAggregateInputType = {
    id?: true;
    score?: true;
};
export type ScoreMinAggregateInputType = {
    id?: true;
    name?: true;
    score?: true;
};
export type ScoreMaxAggregateInputType = {
    id?: true;
    name?: true;
    score?: true;
};
export type ScoreCountAggregateInputType = {
    id?: true;
    name?: true;
    score?: true;
    _all?: true;
};
export type ScoreAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScoreWhereInput;
    orderBy?: Prisma.ScoreOrderByWithRelationInput | Prisma.ScoreOrderByWithRelationInput[];
    cursor?: Prisma.ScoreWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ScoreCountAggregateInputType;
    _avg?: ScoreAvgAggregateInputType;
    _sum?: ScoreSumAggregateInputType;
    _min?: ScoreMinAggregateInputType;
    _max?: ScoreMaxAggregateInputType;
};
export type GetScoreAggregateType<T extends ScoreAggregateArgs> = {
    [P in keyof T & keyof AggregateScore]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateScore[P]> : Prisma.GetScalarType<T[P], AggregateScore[P]>;
};
export type ScoreGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScoreWhereInput;
    orderBy?: Prisma.ScoreOrderByWithAggregationInput | Prisma.ScoreOrderByWithAggregationInput[];
    by: Prisma.ScoreScalarFieldEnum[] | Prisma.ScoreScalarFieldEnum;
    having?: Prisma.ScoreScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScoreCountAggregateInputType | true;
    _avg?: ScoreAvgAggregateInputType;
    _sum?: ScoreSumAggregateInputType;
    _min?: ScoreMinAggregateInputType;
    _max?: ScoreMaxAggregateInputType;
};
export type ScoreGroupByOutputType = {
    id: number;
    name: string;
    score: number;
    _count: ScoreCountAggregateOutputType | null;
    _avg: ScoreAvgAggregateOutputType | null;
    _sum: ScoreSumAggregateOutputType | null;
    _min: ScoreMinAggregateOutputType | null;
    _max: ScoreMaxAggregateOutputType | null;
};
type GetScoreGroupByPayload<T extends ScoreGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ScoreGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ScoreGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ScoreGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ScoreGroupByOutputType[P]>;
}>>;
export type ScoreWhereInput = {
    AND?: Prisma.ScoreWhereInput | Prisma.ScoreWhereInput[];
    OR?: Prisma.ScoreWhereInput[];
    NOT?: Prisma.ScoreWhereInput | Prisma.ScoreWhereInput[];
    id?: Prisma.IntFilter<"Score"> | number;
    name?: Prisma.StringFilter<"Score"> | string;
    score?: Prisma.IntFilter<"Score"> | number;
};
export type ScoreOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
};
export type ScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ScoreWhereInput | Prisma.ScoreWhereInput[];
    OR?: Prisma.ScoreWhereInput[];
    NOT?: Prisma.ScoreWhereInput | Prisma.ScoreWhereInput[];
    name?: Prisma.StringFilter<"Score"> | string;
    score?: Prisma.IntFilter<"Score"> | number;
}, "id">;
export type ScoreOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    _count?: Prisma.ScoreCountOrderByAggregateInput;
    _avg?: Prisma.ScoreAvgOrderByAggregateInput;
    _max?: Prisma.ScoreMaxOrderByAggregateInput;
    _min?: Prisma.ScoreMinOrderByAggregateInput;
    _sum?: Prisma.ScoreSumOrderByAggregateInput;
};
export type ScoreScalarWhereWithAggregatesInput = {
    AND?: Prisma.ScoreScalarWhereWithAggregatesInput | Prisma.ScoreScalarWhereWithAggregatesInput[];
    OR?: Prisma.ScoreScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ScoreScalarWhereWithAggregatesInput | Prisma.ScoreScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Score"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Score"> | string;
    score?: Prisma.IntWithAggregatesFilter<"Score"> | number;
};
export type ScoreCreateInput = {
    name: string;
    score: number;
};
export type ScoreUncheckedCreateInput = {
    id?: number;
    name: string;
    score: number;
};
export type ScoreUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ScoreUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ScoreCreateManyInput = {
    id?: number;
    name: string;
    score: number;
};
export type ScoreUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ScoreUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ScoreCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
};
export type ScoreAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
};
export type ScoreMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
};
export type ScoreMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
};
export type ScoreSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ScoreSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    score?: boolean;
}, ExtArgs["result"]["score"]>;
export type ScoreSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    score?: boolean;
}, ExtArgs["result"]["score"]>;
export type ScoreSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    score?: boolean;
}, ExtArgs["result"]["score"]>;
export type ScoreSelectScalar = {
    id?: boolean;
    name?: boolean;
    score?: boolean;
};
export type ScoreOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "score", ExtArgs["result"]["score"]>;
export type $ScorePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Score";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        score: number;
    }, ExtArgs["result"]["score"]>;
    composites: {};
};
export type ScoreGetPayload<S extends boolean | null | undefined | ScoreDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ScorePayload, S>;
export type ScoreCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ScoreCountAggregateInputType | true;
};
export interface ScoreDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Score'];
        meta: {
            name: 'Score';
        };
    };
    findUnique<T extends ScoreFindUniqueArgs>(args: Prisma.SelectSubset<T, ScoreFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ScoreClient<runtime.Types.Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ScoreFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScoreClient<runtime.Types.Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ScoreFindFirstArgs>(args?: Prisma.SelectSubset<T, ScoreFindFirstArgs<ExtArgs>>): Prisma.Prisma__ScoreClient<runtime.Types.Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ScoreFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScoreClient<runtime.Types.Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ScoreFindManyArgs>(args?: Prisma.SelectSubset<T, ScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ScoreCreateArgs>(args: Prisma.SelectSubset<T, ScoreCreateArgs<ExtArgs>>): Prisma.Prisma__ScoreClient<runtime.Types.Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ScoreCreateManyArgs>(args?: Prisma.SelectSubset<T, ScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ScoreCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ScoreDeleteArgs>(args: Prisma.SelectSubset<T, ScoreDeleteArgs<ExtArgs>>): Prisma.Prisma__ScoreClient<runtime.Types.Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ScoreUpdateArgs>(args: Prisma.SelectSubset<T, ScoreUpdateArgs<ExtArgs>>): Prisma.Prisma__ScoreClient<runtime.Types.Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ScoreDeleteManyArgs>(args?: Prisma.SelectSubset<T, ScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ScoreUpdateManyArgs>(args: Prisma.SelectSubset<T, ScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ScoreUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ScoreUpsertArgs>(args: Prisma.SelectSubset<T, ScoreUpsertArgs<ExtArgs>>): Prisma.Prisma__ScoreClient<runtime.Types.Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ScoreCountArgs>(args?: Prisma.Subset<T, ScoreCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ScoreCountAggregateOutputType> : number>;
    aggregate<T extends ScoreAggregateArgs>(args: Prisma.Subset<T, ScoreAggregateArgs>): Prisma.PrismaPromise<GetScoreAggregateType<T>>;
    groupBy<T extends ScoreGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ScoreGroupByArgs['orderBy'];
    } : {
        orderBy?: ScoreGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ScoreFieldRefs;
}
export interface Prisma__ScoreClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ScoreFieldRefs {
    readonly id: Prisma.FieldRef<"Score", 'Int'>;
    readonly name: Prisma.FieldRef<"Score", 'String'>;
    readonly score: Prisma.FieldRef<"Score", 'Int'>;
}
export type ScoreFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScoreSelect<ExtArgs> | null;
    omit?: Prisma.ScoreOmit<ExtArgs> | null;
    where: Prisma.ScoreWhereUniqueInput;
};
export type ScoreFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScoreSelect<ExtArgs> | null;
    omit?: Prisma.ScoreOmit<ExtArgs> | null;
    where: Prisma.ScoreWhereUniqueInput;
};
export type ScoreFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScoreSelect<ExtArgs> | null;
    omit?: Prisma.ScoreOmit<ExtArgs> | null;
    where?: Prisma.ScoreWhereInput;
    orderBy?: Prisma.ScoreOrderByWithRelationInput | Prisma.ScoreOrderByWithRelationInput[];
    cursor?: Prisma.ScoreWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScoreScalarFieldEnum | Prisma.ScoreScalarFieldEnum[];
};
export type ScoreFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScoreSelect<ExtArgs> | null;
    omit?: Prisma.ScoreOmit<ExtArgs> | null;
    where?: Prisma.ScoreWhereInput;
    orderBy?: Prisma.ScoreOrderByWithRelationInput | Prisma.ScoreOrderByWithRelationInput[];
    cursor?: Prisma.ScoreWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScoreScalarFieldEnum | Prisma.ScoreScalarFieldEnum[];
};
export type ScoreFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScoreSelect<ExtArgs> | null;
    omit?: Prisma.ScoreOmit<ExtArgs> | null;
    where?: Prisma.ScoreWhereInput;
    orderBy?: Prisma.ScoreOrderByWithRelationInput | Prisma.ScoreOrderByWithRelationInput[];
    cursor?: Prisma.ScoreWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScoreScalarFieldEnum | Prisma.ScoreScalarFieldEnum[];
};
export type ScoreCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScoreSelect<ExtArgs> | null;
    omit?: Prisma.ScoreOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScoreCreateInput, Prisma.ScoreUncheckedCreateInput>;
};
export type ScoreCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ScoreCreateManyInput | Prisma.ScoreCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ScoreCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScoreSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScoreOmit<ExtArgs> | null;
    data: Prisma.ScoreCreateManyInput | Prisma.ScoreCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ScoreUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScoreSelect<ExtArgs> | null;
    omit?: Prisma.ScoreOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScoreUpdateInput, Prisma.ScoreUncheckedUpdateInput>;
    where: Prisma.ScoreWhereUniqueInput;
};
export type ScoreUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ScoreUpdateManyMutationInput, Prisma.ScoreUncheckedUpdateManyInput>;
    where?: Prisma.ScoreWhereInput;
    limit?: number;
};
export type ScoreUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScoreSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScoreOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScoreUpdateManyMutationInput, Prisma.ScoreUncheckedUpdateManyInput>;
    where?: Prisma.ScoreWhereInput;
    limit?: number;
};
export type ScoreUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScoreSelect<ExtArgs> | null;
    omit?: Prisma.ScoreOmit<ExtArgs> | null;
    where: Prisma.ScoreWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScoreCreateInput, Prisma.ScoreUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ScoreUpdateInput, Prisma.ScoreUncheckedUpdateInput>;
};
export type ScoreDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScoreSelect<ExtArgs> | null;
    omit?: Prisma.ScoreOmit<ExtArgs> | null;
    where: Prisma.ScoreWhereUniqueInput;
};
export type ScoreDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScoreWhereInput;
    limit?: number;
};
export type ScoreDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScoreSelect<ExtArgs> | null;
    omit?: Prisma.ScoreOmit<ExtArgs> | null;
};
export {};
