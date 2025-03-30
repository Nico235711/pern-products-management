
import { Sequelize } from 'sequelize-typescript'
process.loadEnvFile()

export const db = new Sequelize(process.env.DATABASE_URL!, {
  models: [__dirname + "/../models/**"],
  logging: false,
})