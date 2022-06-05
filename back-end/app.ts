import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

// Types
import type { Express } from "express";

// Dotenv Config
dotenv.config();

// Morgan Config
morgan(":method :url :status :res[content-length] - :response-time ms");

const app: Express = express();

export default app;
