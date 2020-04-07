// Общие тайпинги для любых мест: магазинов, спотов.

export declare namespace Place {
    type WorkingStatus = 'active' | 'inactive' | 'repair' | 'unknown';

    interface WorgingTime {
        start: Date;
        end: Date;
    }
}
