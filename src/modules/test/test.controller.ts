import { Body, Controller, Get, Post } from "@nestjs/common";
import { Test } from "../entities/test.entity";
import { TestService } from "./test.service";

@Controller("tests")
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
  async createTest(
    @Body("name") name: string,
    @Body("age") age: number,
  ): Promise<Test> {
    return this.testService.createTest(name, age);
  }

  @Get()
  async findAllTests(): Promise<Test[]> {
    return this.testService.findAllTests();
  }
}
