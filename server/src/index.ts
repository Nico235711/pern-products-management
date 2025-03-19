import app from "./server";
import { styleText } from "node:util"

const PORT = process.env.port || 4000
app.listen(PORT, () => {
  console.log(styleText("magentaBright", `Server is running on http://localhost:${PORT}`));
  
})