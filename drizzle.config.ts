import "dotenv/config";
import type { Config } from "drizzle-kit";
export default {
	schema: "./src/db/schema.ts",
	out: "./drizzle/migrations",
	driver: "pg", // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
	dbCredentials: {
		host: process.env.POSTGRES_HOST as string,
		user: process.env.POSTGRES_USER as string,
		password: process.env.POSTGRES_PASSWORD as string,
		database: process.env.POSTGRES_DATABASE as string,
	},
} satisfies Config;
