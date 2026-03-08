import express from "express";
import { exec } from "child_process";
import { stdout } from "process";

const router = express.Router();

router.get("/", (req, res) => {
    exec("docker ps --format '{{json .}}'", (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error.message}`);
            return res.status(500).json({ error: "Failed to retrieve Docker containers" });
        }

        const container = stdout.trim().split("\n").map(line => JSON.parse(line));
        return res.json(container);
    });
});

export default router;