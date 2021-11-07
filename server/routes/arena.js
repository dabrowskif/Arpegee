import express from 'express';
import {
  createMonster, fightMonster, getMonsters, resetMonsters,
} from '../controllers/api/arena.js';

const router = express.Router();

router.post('/create/monster', createMonster);
router.get('/get/monsters', getMonsters);
router.patch('/reset/monsters', resetMonsters);
router.patch('/fight/monster/:monsterId', fightMonster);

export default router;
