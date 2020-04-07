import * as Boom from 'boom';
import { Request, Response, NextFunction } from 'express';

import formatHttpErrorMessage from '../lib/format-http-error-message';
import logger from '../lib/logger';

/**
 * Error handler.
 *
 * If previous middleware ended with an error,
 * sends out an answer with an error code.
 */
export default () => (err: Boom, req: Request, res: Response, next: NextFunction) => { // eslint-disable-line
    if (!err) {
        return next();
    }

    const httpError = wrapError(err);
    const errorMessage = formatHttpErrorMessage(req, httpError);

    logger.error(errorMessage);

    if (!res.headersSent) {
        res.status(httpError.output.statusCode).json(httpError.output.payload);
    }
};


// TODO Заменить any
function wrapError(error: any): any { // eslint-disable-line @typescript-eslint/no-explicit-any
    if (Boom.isBoom(error)) {
        return error;
    }

    return Boom.boomify(error, error.statusCode || 500);
}
