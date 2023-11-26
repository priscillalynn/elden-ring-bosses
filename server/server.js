import express from 'express';
import dotenv from "dotenv";
import bossRouter from './routes/bosses.js';
import cors from 'cors';

// configure dotenv
dotenv.config();

// instantiate express
const app = express();
// set port
const PORT = process.env.PORT || 3001;

// middleware
app.use(cors());
app.use('/bosses', bossRouter);
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="text-align: center; margin-top: 50px;">Elden Ring Bosses API</h1>'
    );
});

// listen on port
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});