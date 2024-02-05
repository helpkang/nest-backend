import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserServiceModule } from 'src/services/user/user-service.module';
import { LoggerModule } from 'src/common/logger/logger.module';

@Module({
  controllers: [UserController],
  imports: [UserServiceModule, LoggerModule],
})
export class UserControllerModule {}
