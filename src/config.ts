import dotenv from 'dotenv';

dotenv.config();

interface Config {
  nodeEnv: string;
  port: number;
  privateKey: string;
  rpcUrl: string,
}

export const config: Config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '3000', 10),
  privateKey: process.env.PRIVATE_KEY || '',
  rpcUrl: process.env.RPC_URL || '',
};