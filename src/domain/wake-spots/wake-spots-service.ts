import { WakeSpot } from '../../typings';

import logger from '../../lib/logger';
import { WakeSpotsRepository } from './wake-spots-repository';

export class WakeSpotsService {
    private wakeSpotsRepository: WakeSpotsRepository;

    public constructor(wakeSpotsRepository: WakeSpotsRepository) {
        this.wakeSpotsRepository = wakeSpotsRepository;
    }

    public async getAllSpots(): Promise<WakeSpot[]> {
        try {
            const wakeSpots = await this.wakeSpotsRepository.getAll();
            return wakeSpots;
        } catch (error) {
            logger.error(`Could not get all wake spots. ${error}`);
            throw error;
        }
    }
}
