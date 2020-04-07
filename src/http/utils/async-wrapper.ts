import { Request, Response, NextFunction } from 'express';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function asyncWrapper(fn: (req: Request, res: Response) => any): any {
    return async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        try {
            await fn(req, res);
            return;
        } catch (err) {
            next(err);
        }
    };
}
