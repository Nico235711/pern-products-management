import cors, { CorsOptions } from "cors"
process.loadEnvFile()

export const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (process.env.FRONTEND_URL === origin) callback(null, true)
      else callback(new Error("Not allowed by CORS"))
  }
}