import * as Boom from 'boom';
import { Request, Response, NextFunction } from 'express';

export default (_err: Error, _req: Request, _res: Response, next: NextFunction) => {
    next(Boom.notFound('Endpoint not found'));
};
