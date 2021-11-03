import express from 'express';
import {
  createMonster, fightMonster, getMonsters, resetMonsters,
} from '../controllers/arena.js';

const router = express.Router();

router.post('/create/arena', createMonster);
router.get('/get/monsters', getMonsters);
router.get('/reset/monsters', resetMonsters);
router.post('/fight/monster', fightMonster);

export default router;
