import { env } from '~/env.mjs';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './server/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL!,
  },
});
