import express from 'express';
import { getRanking, getRankingByFilter, getRankingCharacter } from '../controllers/api/ranking.js';

const router = express.Router();

router.get('/get', getRanking);
router.get('/character/:id', getRankingCharacter);
router.get('/search', getRankingByFilter);

export default router;
