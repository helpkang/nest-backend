import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entitys/user/user.entity';
import { LoggerModule } from 'src/common/logger/logger.module';
import { TypeOrmTransactionModule } from 'nestjs-typeorm-transactions';

@Module({
  imports: [TypeOrmTransactionModule.forFeature([User]), LoggerModule],
  exports: [UserService],
  providers: [UserService],
})
export class UserServiceModule {}
