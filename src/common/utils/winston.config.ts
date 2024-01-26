import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import * as moment from 'moment-timezone';
import { dirname } from 'path';
import * as winstonDaily from 'winston-daily-rotate-file';

const env = process.env.NODE_ENV || 'development';
const appendTimestamp = winston.format((info, opts) => {
  if (opts.tz) {
    info.timestamp = moment().tz(opts.tz).format();
  }
  return info;
});

const dailyOPtions = {
  level: 'debug',
  datePattern: 'YYYY-MM-DD',
  dirname: `${dirname(require.main.filename)}/logs`,
  filename: `app.log.%DATE%`,
  maxFiles: '14d',
  zippedArchive: true,
  colorize: false,
  handleExceptions: true,
  json: false,
};

export const winstonLogger = WinstonModule.createLogger({
  level: env === 'development' ? 'debug' : 'info',
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(
          (info) => `${info.timestamp} ${info.level} [${process.pid}]: ${info.message}`,
        ),
      ),
    }),
    new winstonDaily(dailyOPtions),
  ],
  exitOnError: false,
  format: winston.format.combine(
    appendTimestamp({ tz: 'Asia/Seoul' }),
    winston.format.json(),
    winston.format.printf((info) => {
      return `${info.timestamp} ${info.level} [${process.pid}]: ${info.message}`;
    }),
  ),
});
