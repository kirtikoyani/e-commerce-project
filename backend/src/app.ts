import cors from "cors";
import "dotenv/config";
import express from "express";
import morgan from "morgan";
import { productRouter } from "./Routes/product.routes";
import { userRouter } from "./Routes/user.routes";

const app = express();

//Middleware
app.use(cors({ origin: "*" }));
app.use(morgan("tiny"));
app.use(express.json());

//routes
app.use("/api", userRouter);
app.use("/api", productRouter);

export { app };

