import express from 'express';

export const diaryRouter = express.Router();

diaryRouter.get('/', (_req, res) => {
  res.send('Fetching all diaries!');
})

diaryRouter.post('/', (_req, res) => {
  res.send('Saving a diary!');
})
