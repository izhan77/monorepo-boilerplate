import 'dotenv/config';
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';

const databaseURL = process.env.DATABASE_URL;

if (!databaseURL) throw new Error("DATABASE_URL is missing from .env");

export const pool = new Pool({
    connectionString: databaseURL,
    max: 10
});

export const db = drizzle(pool);