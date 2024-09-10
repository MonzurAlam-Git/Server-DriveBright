import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  PORT: process.env.PORT,
  DB_URI: process.env.DB_URI,
  DB_PASSWORD: process.env.DB_PASSWORD,
};
