import express from 'express';
import {getRanking, getRankingByFilter} from "../controllers/ranking.js";

const router = express.Router();

router.get('/get', getRanking);
router.get('/search', getRankingByFilter);

export default router;
