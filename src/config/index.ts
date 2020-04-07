import * as fs from 'fs';
import yaml from 'js-yaml';
import { omit } from 'lodash';

import protectedSettings from './protected-settings.json';

export interface ConfigOptions {
    [key: string]: string;
}

export default class Config {
    private readonly config: ConfigOptions;

    public constructor(filePath: string) {
        this.config = yaml.load(fs.readFileSync(filePath, 'utf8'));
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public get(key: string): any {
        return this.config[key];
    }

    public getSafe(): ConfigOptions {
        return omit(this.config, protectedSettings);
    }
}
