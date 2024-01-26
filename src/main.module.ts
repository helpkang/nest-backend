import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserControllerModule } from './controllers/user/user-controller.module';
import { UserEntity } from './entitys/user/user.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'mv',
      password: 'mvmv123!',
      database: 'mv',
      entities: [UserEntity],
      synchronize: true,
      logging: true,
    }),
    UserControllerModule,
  ],

})
export class MainModule {}
