import express from 'express';
import { diaryRouter } from './routes/diaries.ts';
import cors from 'cors';

const app = express();
//Permite el acceso a la API desde otros dominios (o puertos)
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get('/', (_req, res) => {
  res.send('Hello World from Express + TypeScript mini server! ;)');
});

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/diaries', diaryRouter);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});