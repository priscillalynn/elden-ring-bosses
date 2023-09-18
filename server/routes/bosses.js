import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bosses from '../data/bosses.js';

//💡 The import.meta.url is a special property that contains the URL of the current module file. This URL can be used to determine the file path of the module file using the fileURLToPath function.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json(bosses);
});

router.get("/:bossId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/boss.html"));
});

export default router;