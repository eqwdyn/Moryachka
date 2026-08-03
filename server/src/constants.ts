import { join } from 'path';

export const UPLOADS_DIR_NAME = 'uploads' as const;
export const FILE_UPLOADS_DIR = join(__dirname, UPLOADS_DIR_NAME);

export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = Number(process.env.DB_PORT);
export const DB_USERNAME = process.env.DB_USERNAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;
