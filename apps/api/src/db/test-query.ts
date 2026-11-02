import { desc } from "drizzle-orm";
import { db, pool } from "./connection.js";
import { dbConnectionTests } from "./schema/connection-test.js";

async function main() {
  try {
    // INSERT
    const inserted = await db
      .insert(dbConnectionTests)
      .values({ message: "StockVerse is alive!" })
      .returning();
    console.log("Inserted:", inserted);

    // SELECT
    const rows = await db
      .select()
      .from(dbConnectionTests)
      .orderBy(desc(dbConnectionTests.id))
      .limit(5);
    console.log("Fetched rows:", rows);
  } catch (error) {
    console.error(error);
  } finally {
    await pool.end();
  }
}
main();