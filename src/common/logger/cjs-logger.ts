import { LoggerService } from '@nestjs/common';
import { winstonLogger } from './winston.config';

export class CJSLogger implements LoggerService {
  logger = winstonLogger;
  /**
   * Write a 'log' level log.
   */
  log(message: any, ...optionalParams: any[]) {
    this.logger.log(message, optionalParams);
  }

  /**
   * Write an 'error' level log.
   */
  error(message: any, ...optionalParams: any[]) {
    this.logger.error(message, optionalParams);
  }

  /**
   * Write a 'warn' level log.
   */
  warn(message: any, ...optionalParams: any[]) {
    this.logger.warn(message, optionalParams);
  }

  /**
   * Write a 'debug' level log.
   */
  debug?(message: any, ...optionalParams: any[]) {
    this.logger.debug(message, optionalParams);
  }

  /**
   * Write a 'verbose' level log.
   */
  verbose?(message: any, ...optionalParams: any[]) {
    this.logger.verbose(message, optionalParams);
  }
}
