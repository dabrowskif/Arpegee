import express from 'express';
import { getRanking, getRankingByFilter } from '../controllers/api/ranking.js';

const router = express.Router();

router.get('/get', getRanking);
router.get('/search', getRankingByFilter);

export default router;
