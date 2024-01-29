import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserControllerModule } from './controllers/user/user-controller.module';
import { User } from './entitys/user/user.entity';
import CustomLogger from './CustomLogger';
@Module({
  imports: [
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
