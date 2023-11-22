import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import BossController from "../controllers/bosses.js";

/*
// This is a workaround to use __dirname in ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/:bossId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/boss.html"));
});
*/

const router = express.Router();

// routes for bosses
router.get("/", BossController.getBosses);
router.get("/:bossId", BossController.getBossById);
router.get("/name/:bossName", BossController.getBossByName);
router.post("/", BossController.createBoss);
router.put("/:bossId", BossController.updateBoss);
router.delete("/:bossId", BossController.deleteBoss);

export default router;
