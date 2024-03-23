import { EntityManager, EntityRepository } from "@mikro-orm/postgresql";
import { Test } from "./test.entity";

export class TestRepository extends EntityRepository<Test> {
  constructor(readonly em: EntityManager) {
    super(em, Test);
  }

  async softDeleteTest(id: string): Promise<void> {
    const test = await this.em.findOneOrFail(Test, id);
    test.age = -1;
    await this.em.persist(test).flush();
  }
}
