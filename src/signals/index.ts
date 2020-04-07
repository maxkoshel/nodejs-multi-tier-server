import process from 'process';

export const exitProcess = (closeFunc: () => void): NodeJS.SignalsListener => async () => {
    try {
        await closeFunc();
        process.exit(0);
    } catch (err) {
        process.exit(1);
    }
};
