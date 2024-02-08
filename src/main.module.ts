import { Module } from '@nestjs/common';
import { TypeOrmTransactionModule } from 'nestjs-typeorm-transactions';

import { v4 as uuid } from 'uuid';

import { UserControllerModule } from './controllers/user/user-controller.module';
import { User } from './entitys/user/user.entity';
import CustomLogger from './CustomLogger';
import { ClsModule } from 'nestjs-cls';

import { LoggerModule } from './common/logger/logger.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './common/filter/http-exception.filter';

import * as dotenv from 'dotenv';
const NODE_ENV = process.env.NODE_ENV || 'development';
dotenv.config({
  path: `.env/${NODE_ENV}.env`,
});

@Module({
  imports: [
    ClsModule.forRoot({
      middleware: {
        mount: true,
        generateId: true,
        idGenerator: (req: Request) => req.headers['X-Request-Id'] ?? uuid(),
      },
    }),
    LoggerModule,
    TypeOrmTransactionModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.HOST,
      port: Number(process.env.PORT),
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      synchronize: process.env.SYNCHRONIZE === 'true',
      logging: process.env.LOGGING === 'true',
      // port: 3306,
      // username: 'mv',
      // password: 'mvmv123!',
      // database: 'mv',
      // synchronize: true,
      // logging: true,
      entities: [User],
      logger: new CustomLogger(),
    }),
    UserControllerModule,
  ],

  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class MainModule {}
