import 'dotenv/config';
import express from 'express';
import connectDB from './config/database';
import { connectRedis } from './config/redis';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const initializeApp = async () => {
  await connectDB();
  await connectRedis();
};

initializeApp();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor SoulQuest Online');
});

app.listen(PORT, () => {
  console.log(`Servidor SoulQuest rodando na porta ${PORT}`);
});
