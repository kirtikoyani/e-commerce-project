import cors from "cors";
import "dotenv/config";
import express from "express";
import http from "http";
import { mongoConnect } from "./Database/mongoose";
import { router } from './Routes/index.routes';
const app = express();

//Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

const PORT: number = Number(process.env.PORT);
const server = http.createServer(app);
app.use('/api', router);

async function startServer() {
  await mongoConnect();
  server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });
}
startServer();
