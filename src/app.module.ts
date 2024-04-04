import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { OrmModule } from "./lib/orm/orm.module";
import { TestModule } from "./modules/test/test.module";

@Module({
  imports: [ConfigModule.forRoot(), OrmModule, TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
