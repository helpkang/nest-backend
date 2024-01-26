import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppServiceModule } from 'src/services/app/app.service.module';

@Module({
  imports: [AppServiceModule],
  controllers: [AppController],
})
export class AppControllerModule {}
