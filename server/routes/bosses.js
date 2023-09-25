import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import BossController from "../controllers/bosses.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

router.get("/", BossController.getBosses);

router.get("/:bossId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/boss.html"));
});


export default router;
