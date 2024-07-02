import { Router ,Request, Response } from 'express';

export const homeRouter = Router();

homeRouter.get('/', (req: Request, res: Response) => {
  res.render('home',{message: 'Hello, TypeScript with Express!'});
});
