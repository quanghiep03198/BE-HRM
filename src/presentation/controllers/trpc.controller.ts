import { All, Controller, Next, Req, Res } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { TrpcRouter } from '@infrastructure/trpc/trpc.router';

@Controller()
export class TrpcController {
  constructor(private readonly trpcRouter: TrpcRouter) {}

  @All('/trpc/*')
  async handleTrpc(@Req() req: Request, @Res() res: Response, @Next() next: NextFunction) {
    // Strip the /trpc prefix from the URL
    const path = req.url.replace(/^\/trpc/, '');
    req.url = path;

    const handler = createExpressMiddleware({
      router: this.trpcRouter.appRouter,
      createContext: () => ({}),
    });

    return handler(req, res, next);
  }
}
