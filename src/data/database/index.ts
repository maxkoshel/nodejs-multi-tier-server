import mongoose from 'mongoose';

import logger from '../../lib/logger';

export interface DatabaseOptions {
    dbName: string;
    protocol: string;
    host: string;
    port: number;
    user: string;
    password: string;
}

export class Database {
    private readonly options: DatabaseOptions;

    public database?: mongoose.Mongoose;

    public constructor(options: DatabaseOptions) {
        this.options = options;
    }

    public async connect(): Promise<void> {
        const { protocol, host, port, dbName, user, password } = this.options;
        const credentials = user ? `${user}:${password}@` : '';
        const url = `${protocol}://${credentials}${host}:${port}/${dbName}`;

        try {
            this.database = await mongoose.connect(url, { useNewUrlParser: true });
        } catch (error) {
            logger.error(`Could not connect to database. ${error}`);
        }

        logger.info(`Connected successfully to database ${protocol}://${host}:${port}`);
    }

    public async disconnect(): Promise<void> {
        if (this.database) {
            await this.database.disconnect();
        }
    }
}
