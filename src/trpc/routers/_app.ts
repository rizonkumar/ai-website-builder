import { z } from "zod";
import { createTRPCRouter, baseProcedure } from "@/trpc/init";

export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.name}`,
      };
    }),
});

export type AppRouter = typeof appRouter;
