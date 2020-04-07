import { WakeSpot } from '../../typings';

import { WakeSpotDao } from '../database/enteties/wake-spot';

export class WakeSpotsRepository {
    public async getAll(): Promise<WakeSpot[]> {
        const spots = await WakeSpotDao.find();
        return spots.map((wakeSpot) => wakeSpot.toJSON());
    }
}
