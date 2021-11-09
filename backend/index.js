import express from "express";
import cors from "cors";
import db from "./db/db.js";
import dontenv from "dotenv";
import book from "./routes/book.js";
import user from "./routes/user.js";
import supplier from "./routes/supplier.js"
dontenv.config(); // para que cuando ejecute el servidor las variables esten listas para usar

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/book", book);
app.use("/api/user", user);
app.use("/api/supplier", supplier);

app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: " + process.env.PORT)
);

db.dbConnection();