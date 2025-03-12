import server from "./server";
import { styleText } from 'node:util';

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(styleText("magenta", `Server is running on http://localhost:${PORT}`));
  
})