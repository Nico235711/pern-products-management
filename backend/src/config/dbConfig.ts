import { Sequelize } from "sequelize-typescript";
import { styleText } from "node:util";
process.loadEnvFile()

const db = new Sequelize(process.env.DATABASE_URL!, {
  models: [__dirname + "/../models/*"] // cuando se construya pasan a ser js
})

const connectDB = async () => {
  try {
    await db.authenticate()
    db.sync()
    console.log(styleText("magentaBright", "Base de datos conectada"));    
  } catch (error) {
    console.log(error);
  }
}

export default connectDB