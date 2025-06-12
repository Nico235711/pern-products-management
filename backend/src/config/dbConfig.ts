import { Sequelize } from "sequelize-typescript";
process.loadEnvFile()

const db = new Sequelize(process.env.DATABASE_URL!, {
  models: [__dirname + "/../models/*"], // cuando se construya pasan a ser js
  logging: false
})

const connectDB = async () => {
  try {
    await db.authenticate()
    db.sync()
    console.log("Base de datos conectada");
  } catch (error) {
    console.log(error);
  }
}

export default connectDB