import express from 'express';

import {createCharacter, getCharacter, increaseStatistic, updateCharacter} from "../controllers/character.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post('/create', createCharacter);
router.post('/get', getCharacter);

router.patch('/statistics/increase', increaseStatistic);
router.patch('/update', updateCharacter);

export default router;
