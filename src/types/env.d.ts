// src/types/env.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
      RPC_URL: 'development' | 'production' | 'test';
      PORT?: string;
      RPC_URL: string;
      PRIVATE_KEY: string;
    }
  }
  