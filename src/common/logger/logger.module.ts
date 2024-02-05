import { Module } from '@nestjs/common';
import { CJSLogger } from './cjs-logger';

@Module({
  providers: [CJSLogger],
  exports: [CJSLogger],
})
export class LoggerModule {}
