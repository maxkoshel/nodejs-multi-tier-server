import * as Boom from 'boom';
import { EOL } from 'os';
import { Request } from 'express';

/**
 * Formats a description of an HTTP error.
 */
export default (req: Request, err: Boom) => {
    const { statusCode } = err.output;
    const errorType = err.output.payload.error;
    // Remove the error.message from the stack trace.
    const errStack = err.stack ? err.stack.split(EOL).splice(1) : '';

    return [
        `HttpError ${statusCode} (${errorType}) [${req.method} ${req.originalUrl}]: ${err.message}`,
        errStack,
    ].join(EOL);
};
