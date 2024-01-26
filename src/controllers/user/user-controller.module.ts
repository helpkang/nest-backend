import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserServiceModule } from 'src/services/user/user-service.module';

@Module({
  controllers: [UserController],
  imports: [UserServiceModule],
})
export class UserControllerModule {}
