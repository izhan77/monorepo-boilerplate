import { sql } from "drizzle-orm";
import { db, pool } from "./connection.js";

async function main() {
  try {
    console.log("Connecting to PostgreSQL...");

    const result = await db.execute(
      sql`SELECT current_database() AS db_name, 1 + 1 AS test_math`
    );

    console.log("Success! Here is what PostgreSQL said:");
    console.table(result.rows);
  } catch (error) {
    console.error("Failed to connect:", error);
  } finally {
    await pool.end();
  }
}

main();