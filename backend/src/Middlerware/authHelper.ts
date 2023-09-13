import { RequestHandler } from "express";
const jwt = require("jsonwebtoken");

const JWT_SECRET: string = process.env.JWT_SECRET as string;

// Authentication middleware
export const authenticateUser: RequestHandler = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Authentication failed" });
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    next();
  } catch (e) {
    res.status(401).json({ error: "Authentication failed" });
  }
};
