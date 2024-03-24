import { faker } from "@faker-js/faker";
import { Test } from "../../modules/entities/test.entity";

export const createTestEntityMockedData = (): Test => ({
  id: faker.string.uuid(),
  age: faker.number.int({ min: 1, max: 100 }),
  name: faker.string.alphanumeric({ length: 10 }),
  email: faker.internet.email(),
});

export const mockedTestEntities = Array.from({ length: 10 }, () =>
  createTestEntityMockedData(),
);
