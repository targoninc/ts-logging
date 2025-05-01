import type {LogLevel} from "./LogLevel.ts";

export interface LoggingDb {
    log(level: LogLevel, message: string, stackTrace: string, logId: string, host: string, info: Object): void;
}