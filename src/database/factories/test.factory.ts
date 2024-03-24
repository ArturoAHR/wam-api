import { EntityManager } from "@mikro-orm/core";
import { createTestEntityMockedData } from "../../mocks/entitites/test.mock";
import { Test } from "../../modules/entities/test.entity";

export class TestFactory {
  constructor(private readonly em: EntityManager) {}

  async create() {
    const testData = createTestEntityMockedData();

    const test = await this.em.create(Test, testData);

    return test;
  }

  async createMany(length: number) {
    const testsData = Array.from({ length }, () =>
      createTestEntityMockedData(),
    );

    const tests = [];

    for (const testData of testsData) {
      tests.push(await this.em.create(Test, testData));
    }

    return tests;
  }
}
