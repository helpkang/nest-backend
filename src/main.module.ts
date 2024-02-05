import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';

import { UserControllerModule } from './controllers/user/user-controller.module';
import { User } from './entitys/user/user.entity';
import CustomLogger from './CustomLogger';
import { ClsModule } from 'nestjs-cls';

import { LoggerModule } from './common/logger/logger.module';
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
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'mv',
      password: 'mvmv123!',
      database: 'mv',
      entities: [User],
      synchronize: true,
      logging: true,
      logger: new CustomLogger(),
    }),
    UserControllerModule,
  ],
})
export class MainModule {}
