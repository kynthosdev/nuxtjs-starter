import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    DATABASE_URL: z.string().min(1),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    DATABASE_URL: z.string().min(1),
    NUXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    NUXT_CLERK_SECRET_KEY:z.string().min(1),
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    NUXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NUXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NUXT_CLERK_SECRET_KEY: process.env.NUXT_CLERK_SECRET_KEY,
  },
});