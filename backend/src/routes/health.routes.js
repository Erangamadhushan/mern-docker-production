import express from "express";
import mongoose from "mongoose";

const router = express.Router();

router.get("/", async (req, res) => {
  const dbState =
    mongoose.connection.readyState === 1 ? "Connected" : "Disconnected";

  res.json({
    api: "Running",
    database: dbState,
    uptime: process.uptime(),
  });
});

export default router;
