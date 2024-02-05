import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entitys/user/user.entity';
import { LoggerModule } from 'src/common/logger/logger.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), LoggerModule],
  exports: [UserService],
  providers: [UserService],
})
export class UserServiceModule {}
