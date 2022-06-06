import express from "express";
import morgan from "morgan";

// Types
import type { Express } from "express";

// Morgan Config
morgan(":method :url :status :res[content-length] - :response-time ms");

const app: Express = express();

export default app;
