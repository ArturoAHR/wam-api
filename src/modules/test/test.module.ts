import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { Test } from "../entities/test.entity";
import { TestController } from "./test.controller";
import { TestService } from "./test.service";

@Module({
  imports: [MikroOrmModule.forFeature([Test])],
  providers: [TestService],
  controllers: [TestController],
})
export class TestModule {}
