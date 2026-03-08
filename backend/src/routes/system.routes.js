import express from "express";
import os from "os";

const router = express.Router();

router.get("/", (req, res) => {
  const memoryUsage = process.memoryUsage();

  return res.json({
    cpuload: os.loadavg(),
    freeMemory: os.freemem(),
    totalMemory: os.totalmem(),
    heapUsed: memoryUsage.heapUsed,
    heapTotal: memoryUsage.heapTotal,
    systemUptime: os.uptime(),
  });
});

export default router;
