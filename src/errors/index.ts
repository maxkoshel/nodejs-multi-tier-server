import ExtendableError from 'es6-error';
import * as http from 'http';

type Code = number;
type Message = string;
type Data = any; // eslint-disable-line @typescript-eslint/no-explicit-any

export interface ApiErrorJson {
    error: {
        code: Code;
        message: Message;
        data: Data;
    };
}

export class ApiError extends ExtendableError {
    public code: Code;

    public message: Message;

    public data: Data;

    public constructor(code: Code, message: Message, data?: Data) {
        super(message || http.STATUS_CODES[code]);

        this.message = message;
        this.code = code || 500;
        this.data = data;
    }

    public toJson(): ApiErrorJson {
        return {
            error: {
                code: this.code,
                message: this.message,
                data: this.data,
            },
        };
    }
}
