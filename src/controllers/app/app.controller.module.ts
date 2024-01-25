import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppServiceModule } from 'src/services/app/app.service.module';
// import { AppService } from '../../services/app/app.service';

@Module({
  imports: [AppServiceModule],
  controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
