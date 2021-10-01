import {generateNewMonster} from "./generate/monster/monster.js";
import Monster from '../models/monster.js';
import Character from '../models/character.js';
import mongoose from "mongoose";
import {MAX_MONSTERS_PER_ARENA} from "./generate/monster/monsterConstants.js";


export const createMonster = async (req, res) => {
    const { characterLevel, characterId } = req.body;
    console.log(`createMonster for characterLevel: ${characterLevel}`);

    const monster = await generateNewMonster(Number(characterLevel), characterId);
    try {
        await monster.save();

        res.status(201).json({ result: monster });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const getMonsters = async (req, res) => {
    const { characterId, characterLevel } = req.query;
    console.log(`getMonsters for characterId: ${characterId}`);

    if (!mongoose.Types.ObjectId.isValid(characterId)) return res.status(404).send(`No character with id: ${characterId}`);

    try {
        let result = await Monster.find({characterId});
        result = await fillOrCutMonsterTable(result, characterId, characterLevel);

        res.status(200).json({ result: result });
    } catch (error) {
        res.status(500).json( { message: error });
    }
};

const fillOrCutMonsterTable = async (monsters, characterId, characterLevel) => {
    const numberOfMonsters = Object.keys(monsters).length;

    if (numberOfMonsters < MAX_MONSTERS_PER_ARENA) {
        for (let i = numberOfMonsters; i < MAX_MONSTERS_PER_ARENA; i++) {
            const monster = await generateNewMonster(Number(characterLevel), characterId);
            await monster.save();
        }
    } else {
        await monsters.forEach( (monster, index) => {
            if (index >= MAX_MONSTERS_PER_ARENA) {
                Monster.findByIdAndRemove(monster._id);
            }
        });
    }

    return Monster.find({characterId});
};

export const fightMonster = async (req, res) => {
    const { monsterId } = req.body;
    console.log(`fightMonster with id: ${monsterId}`);

    if (!mongoose.Types.ObjectId.isValid(monsterId)) return res.status(404).send(`No monster with id: ${monsterId}`);

    let monster = await Monster.findById(monsterId);
    const characterId = monster.characterId;
    const character = await Character.findById(characterId);
    await Monster.findByIdAndRemove(monster._id);
    monster = await generateNewMonster(Number(character.level), characterId);
    try {
        await monster.save();
        res.status(201).json( {result: monster});
    } catch (error) {
        res.status(500).json( { message: error });
    }
};

