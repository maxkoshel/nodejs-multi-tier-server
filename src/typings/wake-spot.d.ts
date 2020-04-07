import { Common, Map, Place, Spot } from '../typings';

// День открытия и закрытия спота в сезоне.
interface SeasonTime {
    start: Common.UnixTimestamp;
    end: Common.UnixTimestamp;
}

export interface WakeSpot {
    address: string;
    badges: Spot.Badge[];
    extraServices: string[];
    features: Spot.Feature[];
    id: string;
    info: string;
    name: string;
    phones: Common.Phone[];
    photos: Common.Url[];
    point: Map.Point;
    route: string;
    seasonTime: SeasonTime;
    services: Spot.Service[];
    social: Common.Url[];
    title: string;
    type: Spot.Type[];
    websites: Common.Url[];
    workingStatus: Place.WorkingStatus;
    workingTime: Place.WorgingTime[];
}
