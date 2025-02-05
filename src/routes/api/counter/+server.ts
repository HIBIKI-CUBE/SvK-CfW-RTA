import type { RequestHandler } from './$types';
import { db } from '$lib/drizzle';
import { count as table } from '$lib/db/schema';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
  const { count }: { count: number } = await request.json();

  await db.insert(table).values({ count });

  return json({});
};
