import { WakeSpot } from '../../typings';

export interface WakeSpotsRepository {
    getAll(): Promise<WakeSpot[]>;
}
