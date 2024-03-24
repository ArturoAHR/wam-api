import { Migration } from "@mikro-orm/migrations";

export class Migration20240323190451_add_test_table extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "test" ("id" uuid not null, "name" varchar(255) not null, "age" int not null, constraint "test_pkey" primary key ("id"));',
    );
  }
}
