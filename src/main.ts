import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CJSLogger } from './common/logger/cjs-logger';
import { HttpExceptionFilter } from './common/filter/http-exception.filter';
import { AllExceptionsFilter } from './common/filter/all-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(MainModule, {});
  const httpAdapter = app.get(HttpAdapterHost);
  app.useGlobalFilters(
    new HttpExceptionFilter(),
    new AllExceptionsFilter(httpAdapter),
  );
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
