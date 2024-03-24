import type { EntityManager } from "@mikro-orm/core";
import { Seeder } from "@mikro-orm/seeder";
import { TestFactory } from "../factories/test.factory";

export class DatabaseSeeder extends Seeder {
  /* Note: Remember to create specialized seeders to call in this main seeder file */
  async run(em: EntityManager): Promise<void> {
    const testFactory = new TestFactory(em);
    console.log({ testFactory });

    const tests = await testFactory.createMany(10);
    console.log({ tests });

    em.flush();
  }
}
