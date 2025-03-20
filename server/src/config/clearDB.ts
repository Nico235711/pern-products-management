import { styleText } from "node:util";
import { db } from "./db"
import { exit } from "node:process";

async function clearDB() {
  try {
    await db.sync({ force: true})
    console.log(styleText("blueBright", "Base de datos eliminada"));
    exit(0)
  } catch (error) {
    throw error
    exit(1)
  }
}

if (process.argv[2] === "--clear") {
  clearDB()
}