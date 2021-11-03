import express from 'express';

import {
  createCharacter,
  getCharacter,
  increaseStatistic,
  updateCharacter,
} from '../controllers/character.js';
import { getRankingCharacter } from '../controllers/ranking.js';

const router = express.Router();

router.post('/create', createCharacter);
// TODO change to .get
router.post('/get', getCharacter);
router.get('/:id', getRankingCharacter);

router.patch('/statistics/increase', increaseStatistic);
router.patch('/update', updateCharacter);

export default router;
