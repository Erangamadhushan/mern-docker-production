import express from "express";
import { exec } from "child_process";
import { stdout } from "process";

const router = express.Router();
let dockerCache = [];
let lastUpdate = 0;

router.get("/", (req, res) => {
  exec("docker ps --format '{{json .}}'", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      return res
        .status(500)
        .json({ error: "Failed to retrieve Docker containers" });
    }

    const containers = stdout
      .trim()
      .split("\n")
      .map((line) => JSON.parse(line));

    dockerCache = containers;
    lastUpdate = Date.now();

    res.json(containers);
  });
});

export default router;
