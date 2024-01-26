import { Module } from '@nestjs/common';
import { AppControllerModule } from './controllers/app/app.controller.module';
@Module({
  imports: [AppControllerModule],
})
export class MainModule {}
