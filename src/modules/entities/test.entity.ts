import {
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { v4 } from "uuid";
import { TestRepository } from "../test/test.repository";

@Entity()
export class Test {
  @PrimaryKey({ type: "uuid" })
  id: string = v4();

  @Property()
  name: string;

  @Property()
  age: number;

  @Property()
  email: string;

  [EntityRepositoryType]?: TestRepository;
}
