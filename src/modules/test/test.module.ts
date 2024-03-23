import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { TestController } from "./test.controller";
import { Test } from "./test.entity";
import { TestService } from "./test.service";

@Module({
  imports: [MikroOrmModule.forFeature([Test])],
  providers: [TestService],
  controllers: [TestController],
})
export class TestModule {}
