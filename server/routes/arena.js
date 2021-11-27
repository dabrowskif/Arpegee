import express from 'express';
import {
  createMonster, fightMonster, getMonsters, resetMonsters,
} from '../controllers/api/arena.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/create/monster', auth, createMonster);
router.get('/get/monsters', auth, getMonsters);
router.patch('/reset/monsters', auth, resetMonsters);
router.patch('/fight/monster/:monsterId', auth, fightMonster);

export default router;
