// Общие тайпинги для использования в различных случаях.

export declare namespace Common {
    type Email = string;
    type UnixTimestamp = number;
    type Url = string;

    // Пример: +7800505577
    type Phone = string;
}

export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


