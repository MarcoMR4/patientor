import express from 'express';

export const diaryRouter = express.Router();


import dairyService from '../services/dairyService.ts';


diaryRouter.get('/', (_req, res) => {
  res.send(dairyService.getNonSensitiveEntries());
})

diaryRouter.post('/', (_req, res) => {
  res.send('Saving a diary!');
})
