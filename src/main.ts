import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const environment = configService.get("ENVIRONMENT");

  if (environment === "development") {
    const config = new DocumentBuilder()
      .setTitle("WAM API")
      .setDescription("API for WAM Services")
      .setVersion("0.1.0")
      .addTag("test")
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api", app, document);
  }

  await app.listen(3000);
}
bootstrap();
