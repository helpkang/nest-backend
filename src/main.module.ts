import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserControllerModule } from './controllers/user-controller/user-controller.module';
import { UserServiceModule } from './services/user-service/user-service.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'mv',
      password: 'mvmv123!',
      database: 'mv',
      entities: [],
      synchronize: true,
    }),
    UserControllerModule,
    UserServiceModule,
  ],
})
export class MainModule {}
