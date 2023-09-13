import "dotenv/config";
import http from "http";
import { mongoConnect } from "./Database/mongoose";
import { app } from "./app";
const PORT: number = Number(process.env.PORT);
const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });
}
startServer();
