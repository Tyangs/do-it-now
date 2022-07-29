/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LOCATION_ORIGIN: string;
  readonly VITE_YOUNGS_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
