import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CJSLogger } from './common/logger/cjs-logger';

async function bootstrap() {
  const app = await NestFactory.create(MainModule, {});
  app.useLogger(app.get(CJSLogger));
  setupSwagger(app);
  await app.listen(3000);
}

bootstrap();

function setupSwagger(app) {
  const config = new DocumentBuilder()
    .setTitle('Metaverse API')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
}
