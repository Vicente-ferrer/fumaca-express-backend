import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Api Fumaça Express')
    .setDescription(
      'Um serviço de delivery voltado para tabacarias, algo como um "Ifood de tabacarias"',
    )
    .setVersion('1.0')
    .addTag('delivery')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('Doc', app, document);

  await app.listen(3000);
}
bootstrap();
