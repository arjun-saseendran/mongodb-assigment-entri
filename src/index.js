import express from "express";
import dotenv from "dotenv";
import ServerRouter from "./routes/server.routes.js";
import dbConnection from "./db/db.connection.js"

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config({ path: "./.env" });

// middlewares
app.use(express.json());

// routes
app.use("/", ServerRouter);

app.listen(PORT, () => {
  dbConnection();
  console.log(`Server running on port ${PORT}`);
});
