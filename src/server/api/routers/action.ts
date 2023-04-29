import { clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const actionRouter = createTRPCRouter({
  action: publicProcedure
    .input(
      z.object({
        title: z.string(),
        actionType: z.string(),
        amount: z.number(),
        source: z.string(),
        category: z.string(),
        userId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.action.create({
        data: {
          userId: input.userId,
          title: input.title,
          actionType: input.actionType,
          source: input.source,
          amount: input.amount,
          category: input.category,
        },
      });
    }),

  getAction: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.action.findMany({
      where: {
        userId: ctx.currentUser || "",
      },
    });

    return posts;
  }),
});
