CREATE TABLE `Count` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`count` integer,
	`created_at` integer DEFAULT (CURRENT_TIMESTAMP)
);
