import express from "express";
import mongoDbConnection from "./config/db.js";
import authRoutes from "./routes/auth.js";

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/api/users", authRoutes);

mongoDbConnection();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
