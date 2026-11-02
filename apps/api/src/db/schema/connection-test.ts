import { pgTable, integer, varchar, timestamp } from "drizzle-orm/pg-core";

export const dbConnectionTests = pgTable("db_connection_tests", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  message: varchar("message", { length: 200 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});


