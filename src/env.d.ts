/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_WEB3FORMS_KEY: string;
  readonly PUBLIC_NEWSLETTER_SIGNUP_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
