import express from 'express';
import {createMonster, fightMonster, getMonsters} from "../controllers/arena.js";

const router = express.Router();

router.post('/create/monster', createMonster);
router.get('/get/monsters', getMonsters);
router.post('/fight/monster', fightMonster);

export default router;
