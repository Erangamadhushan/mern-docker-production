import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.routes.js";
import healthRoutes from "./routes/health.routes.js";
import systemRoutes from "./routes/system.routes.js";
import dockerRoutes from "./routes/docker.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("MERN Docker API Running");
});

app.use("/api/users", userRoutes);
app.use("/api/health", healthRoutes);
app.use("/api/system", systemRoutes);
app.use("/api/docker", dockerRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});