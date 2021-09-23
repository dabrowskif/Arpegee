import express from 'express';

import {createCharacter, getCharacter, updateCharacter} from "../controllers/character.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post('/create', createCharacter);
router.post('/get', getCharacter);

router.patch('/update', updateCharacter);

export default router;
