export {};

declare global {
  interface Window {
    $zoho: any;
  }

  interface ImportMetaEnv {
    readonly VITE_API_URL: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

