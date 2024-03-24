import { Migration } from "@mikro-orm/migrations";

export class Migration20240324180411_add_email_column_to_test_table extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table "test" add column "email" varchar(255) not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "test" drop column "email";');
  }
}
