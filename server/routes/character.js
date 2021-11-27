import express from 'express';

import {
  createCharacter, getCharacter, increaseStatistic, updateCharacter,
} from '../controllers/api/character.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/get/:userId', getCharacter);

router.post('/create', auth, createCharacter);

router.patch('/update', auth, updateCharacter);
router.patch('/statistics/increase', auth, increaseStatistic);

export default router;
