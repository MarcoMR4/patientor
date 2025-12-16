import express from 'express';

export const patientsRouter = express.Router();


import patients from '../services/patientsService';


patientsRouter.get('/', (_req, res) => {
  res.send(patients.getPatients());
})

patientsRouter.post('/', (_req, res) => {
  res.send('Saving a patient!');
})
