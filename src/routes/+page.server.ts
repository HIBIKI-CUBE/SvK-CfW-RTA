import type { PageServerLoad } from './$types';
import { db } from '$lib/drizzle';

export const load: PageServerLoad = async () => {
  const count = await db.query.count.findFirst({
    orderBy: (count, { desc }) => [desc(count.created_at)],
  });

  return { count };
};
