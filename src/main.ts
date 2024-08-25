import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UsuarioModule } from './usuario/usuario.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config1 = new DocumentBuilder()
    .setTitle('API banquify - APP')
    .setDescription('Esta api describe la plataforma banquify - App')
    .setVersion('1.0.0')
    .addTag('banquify-api')
    .build();

  const config2 = new DocumentBuilder()
    .setTitle('API banquify - Usuario')
    .setDescription('Esta api describe el modulo Usuario de la plataforma banquify')
    .setVersion('1.0.0')
    .addTag('Creacion y Modificacion')
    .addTag('Consulta')
    .build();

  const documentApp = SwaggerModule.createDocument(app, config1, {
    include: [ AppModule ],
  });

  const documentUsuario = SwaggerModule.createDocument(app, config2, {
    include: [ UsuarioModule ],
  });

  SwaggerModule.setup('api/app', app, documentApp);
  SwaggerModule.setup('api/usuario', app, documentUsuario);

  await app.listen(3000);
}
bootstrap();
