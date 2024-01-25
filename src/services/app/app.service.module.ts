import { Module } from '@nestjs/common';
import { AppService } from './app.service';

const services = [AppService];
@Module({
  imports: [],
  providers: services,
  exports: services,
})
export class AppServiceModule {}
