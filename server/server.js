import express from 'express';
import dotenv from "dotenv";
import bossRouter from './routes/bosses.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use('/bosses', bossRouter);

app.get('/', (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="text-align: center; margin-top: 50px;">Elden Ring Bosses API</h1>'
    );
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});