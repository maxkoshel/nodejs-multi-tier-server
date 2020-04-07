import express, { Application } from 'express';

import Config from '../config';
import { Database } from '../data/database';
import initRoute from './routes';
import * as middlewares from '../middlewares';

const app = express();
const router = express.Router({ caseSensitive: true, strict: false });

app.disable('x-powered-by');

export const appFactory = (config: Config, database: Database): Application => {
    app.locals.database = database.connect();
    app.locals.config = config.getSafe();

    app.use(initRoute(router));

    app.use(middlewares.unknownEndpoint);
    app.use(middlewares.handleError);

    return app;
};
