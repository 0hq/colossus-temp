import { t } from "../utils";
import { z } from "zod";

export const userRouter = t.router({
  user: t.procedure
    .input(z.object({ username: z.string().nullable() }))
    .query(({ input, ctx }) => {
      if (!input.username) return;
      return ctx.prisma.user.findUnique({
        where: {
          username: input.username!,
        },
      });
    }),
});
