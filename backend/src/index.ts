import app from "./server";
import { styleText } from 'node:util'

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(styleText("cyanBright", `REST API en el puerto ${port}`));
})