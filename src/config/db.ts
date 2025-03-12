import { Sequelize } from 'sequelize-typescript';
import { loadEnvFile } from 'node:process';

loadEnvFile();

export const database = new Sequelize(process.env.DATABASE_URL!, {
  models: [__dirname + '/../models']
});