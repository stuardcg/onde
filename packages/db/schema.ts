import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import { mysqlTable } from "drizzle-orm/mysql-core/table";
import { binary, varchar } from "drizzle-orm/mysql-core/columns";

// create the connection
const connection = connect({
  host: process.env["DATABASE_HOST"],
  username: process.env["DATABASE_USERNAME"],
  password: process.env["DATABASE_PASSWORD"],
});

export const db = drizzle(connection);

export const services = mysqlTable("service", {
  id: binary("id", { length: 16 }).primaryKey().default("UUID_TO_BIN(UUID())"),
  name: varchar("name", { length: 255 }),
});
