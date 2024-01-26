import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(MainModule,{
    logger: ['debug'],
  });

  const config = new DocumentBuilder()
    .setTitle('Metaverse API')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('sw', app, document);

  await app.listen(3000);
}
bootstrap();
