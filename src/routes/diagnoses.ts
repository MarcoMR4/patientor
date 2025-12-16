import express from 'express';

export const diagnosesRouter = express.Router();

import diagnosesService from '../services/diagnosesService';


diagnosesRouter.get('/', async (_req, res) => {
    const data = await diagnosesService.getDiagnoses();
    res.json(data);
})

diagnosesRouter.post('/', (_req, res) => {
  res.send('Saving a diary!');
})
