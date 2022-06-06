import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || "development";

export { PORT, ENV };
