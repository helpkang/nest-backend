// CustomLogger.ts
import { Logger, QueryRunner } from 'typeorm';
import winston, { Logger as WinstonLogger } from 'winston';
import { winstonLogger } from './common/utils/winston.config';
import { LoggerService } from '@nestjs/common';

class CustomLogger implements Logger {
  private winstonLogger: LoggerService;

  constructor() {
    this.winstonLogger = winstonLogger;
  }

  logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner) {
    this.winstonLogger.log(`[Query] ${query} -- Parameters: ${parameters}`);
  }

  logQueryError(error: string, query: string, parameters?: any[], queryRunner?: QueryRunner) {
    this.winstonLogger.error(`[Query Error] ${error} -- Query: ${query} -- Parameters: ${parameters}`);
  }

  logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner) {
    this.winstonLogger.warn(`[Query Slow] ${time}ms -- Query: ${query} -- Parameters: ${parameters}`);
  }

  logSchemaBuild(message: string, queryRunner?: QueryRunner) {
    this.winstonLogger.log(`[Schema Build] ${message}`);
  }

  logMigration(message: string, queryRunner?: QueryRunner) {
    this.winstonLogger.log(`[Migration] ${message}`);
  }

  log(level: 'log' | 'info' | 'warn', message: any, queryRunner?: QueryRunner) {
    this.winstonLogger.log(level, `[Custom] ${message}`);
  }
}

export default CustomLogger;
