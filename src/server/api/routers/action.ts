import { clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { Ratelimit } from "@upstash/ratelimit"; // for deno: see above
import { Redis } from "@upstash/redis";
import { TRPCError } from "@trpc/server";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "10 s"),
  analytics: true,
  /**
   * Optional prefix for the keys used in redis. This is useful if you want to share a redis
   * instance with other applications and want to avoid key collisions. The default prefix is
   * "@upstash/ratelimit"
   */
  prefix: "@upstash/ratelimit",
});

export const actionRouter = createTRPCRouter({
  addAction: publicProcedure
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
      const { success } = await ratelimit.limit(ctx.user || "");

      if (!success) throw new TRPCError({ code: "TOO_MANY_REQUESTS" });
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
        userId: ctx.user || "",
      },
    });

    return posts;
  }),
});
