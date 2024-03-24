import { Migrator } from "@mikro-orm/migrations";
import { Options, PostgreSqlDriver } from "@mikro-orm/postgresql";
import { SeedManager } from "@mikro-orm/seeder";
import "dotenv/config";

export const config: Options = {
  driver: PostgreSqlDriver,

  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,

  dbName: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,

  entities: ["dist/**/*.entity.js"],
  entitiesTs: ["src/**/*.entity.ts"],

  extensions: [Migrator, SeedManager],

  migrations: {
    path: "dist/database/migrations",
    pathTs: "src/database/migrations",
    fileName: (timestamp: string, name: string) => `${timestamp}-${name}`,
  },

  seeder: {
    path: "dist/database/seeders",
    pathTs: "src/database/seeders",
    fileName: (className: string) => `${className}.seed`,
  },
};

export default config;
