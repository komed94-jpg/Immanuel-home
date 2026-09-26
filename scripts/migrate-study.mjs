import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";

// Explicit operator action only; never runs as part of a build or deployment.
const connection = process.env.DATABASE_URL_UNPOOLED;
if (!connection || process.env.CONFIRM_STUDY_MIGRATION !== "yes") {
  throw new Error("Set a direct DATABASE_URL_UNPOOLED and CONFIRM_STUDY_MIGRATION=yes.");
}
if (new URL(connection).hostname.includes("-pooler")) throw new Error("Use the direct database connection.");
await migrate(drizzle(neon(connection)), { migrationsFolder: "./db/migrations" });
console.log("Study schema migration completed.");
