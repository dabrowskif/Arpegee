import express from 'express';

import {
  createCharacter, getCharacter, increaseStatistic, updateCharacter,
} from '../controllers/api/character.js';

const router = express.Router();

router.get('/get/:userId', getCharacter);

router.post('/create', createCharacter);

router.patch('/update', updateCharacter);
router.patch('/statistics/increase', increaseStatistic);

export default router;
