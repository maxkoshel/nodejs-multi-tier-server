import express, { Request, Response, Router } from 'express';
import { asyncWrapper } from '../utils/async-wrapper';
import { WakeSpotsRepository } from '../../data/wake-spots/wake-spots-repository';
import { WakeSpotsService } from '../../domain/wake-spots/wake-spots-service';

const router = express.Router();

const spotsRepository = new WakeSpotsRepository();
const spotsService = new WakeSpotsService(spotsRepository);

export function wakeRoute(): Router {
    router.get(
        '/',
        asyncWrapper(async (_: Request, res: Response): Promise<void> => {
            const spots = await spotsService.getAllSpots();
            res.json(spots);
        }),
    );

    return router;
}
