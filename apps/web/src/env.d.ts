/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly CLERK_SECRET_KEY: string;
  readonly PUBLIC_CLERK_PUBLISHABLE_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
