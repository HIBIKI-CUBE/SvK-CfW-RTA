import { relations, sql } from 'drizzle-orm';
import { blob, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const count = sqliteTable('Count', {
  id: integer().primaryKey({ autoIncrement: true }),
  count: integer(),
  created_at: integer({ mode: 'timestamp' }).default(sql`(CURRENT_TIMESTAMP)`),
});
