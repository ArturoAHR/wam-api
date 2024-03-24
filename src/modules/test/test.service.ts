import { InjectRepository } from "@mikro-orm/nestjs";
import { Injectable } from "@nestjs/common";
import { Test } from "../entities/test.entity";
import { TestRepository } from "./test.repository";

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private readonly testRepository: TestRepository,
  ) {}

  async createTest(name: string, age: number): Promise<Test> {
    const test = new Test();
    test.name = name;
    test.age = age;
    await this.testRepository.upsert(test);
    return test;
  }

  async findAllTests(): Promise<Test[]> {
    return this.testRepository.findAll();
  }
}
