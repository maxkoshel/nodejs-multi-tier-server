import * as path from 'path';

import Config from './config';
import { Database } from './data/database';
import logger from './lib/logger';
import { appFactory } from './http/app';
import { exitProcess } from './signals';

const nodeEnv = process.env.NODE_ENV || 'development';

const configPath = path.resolve(__dirname, 'config', nodeEnv, 'config.yml');
const config = new Config(configPath);

const database = new Database(config.get('database'));

const app = appFactory(config, database);

const { port } = config.get('app');
const server = app.listen(port, () => {
    logger.info(`listening on *:${port}`);
});

const shutdown = exitProcess(() => {
    server.close(async () => {
        await database.disconnect();
    });
});

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

export default server;
