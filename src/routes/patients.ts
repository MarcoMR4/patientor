import express from 'express';
import patients from '../services/patientsService';

export const patientsRouter = express.Router();

patientsRouter.get('/', async (_req, res) => {
  const data = await patients.getPatients();
  res.json(data);
})

patientsRouter.post('/', (_req, res) => {
  res.send('Saving a patient!');
})

