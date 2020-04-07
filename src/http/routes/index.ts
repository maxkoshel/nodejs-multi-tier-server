import { Request, Response, Router } from 'express';

import { wakeRoute } from './wake';

const stub = (_req: Request, res: Response): void => res.end('Hello world!');
const end = (_req: Request, res: Response): void => res.end();

export default (router: Router) => {
    router.get('/', stub);
    router.get('/ping', end);

    router.use('/wake', wakeRoute());

    return router;
};
