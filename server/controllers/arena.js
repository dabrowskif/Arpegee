import mongoose from 'mongoose';
import { generateNewMonster } from './generate/arena/monster.js';
import Monster from '../models/monster.js';
import Character from '../models/character.js';
import { MAX_MONSTERS_PER_ARENA } from './constants/monsterConstants.js';
import { fightCharacterVsMonster } from './fights/fights.js';

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
  console.log(`getMonsters, characterId: ${characterId}`);

  if (!mongoose.Types.ObjectId.isValid(characterId)) return res.status(404).send(`No character with id: ${characterId}`);

  try {
    let monstersTable = await Monster.find({ characterId });
    monstersTable = await fillOrCutMonsterTable(monstersTable, characterId, characterLevel);

    res.status(200).json({ result: monstersTable });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const fillOrCutMonsterTable = async (monsters, characterId, characterLevel) => {
  const numberOfMonsters = Object.keys(monsters).length;

  if (numberOfMonsters < MAX_MONSTERS_PER_ARENA) {
    for (let i = numberOfMonsters; i < MAX_MONSTERS_PER_ARENA; i += 1) {
      const monster = await generateNewMonster(Number(characterLevel), characterId);
      await monster.save();
    }
  } else {
    await monsters.forEach((monster, index) => {
      if (index >= MAX_MONSTERS_PER_ARENA) {
        Monster.findByIdAndRemove(monster._id);
      }
    });
  }

  return Monster.find({ characterId });
};

export const resetMonsters = async (req, res) => {
  const { characterId, characterLevel } = req.query;
  console.log(`resetMonsters, characterId: ${characterId}`);

  if (!mongoose.Types.ObjectId.isValid(characterId)) return res.status(404).send(`No character with id: ${characterId}`);

  try {
    await Monster.deleteMany({ characterId });
    let monstersTable = await Monster.find({ characterId });
    monstersTable = await fillOrCutMonsterTable(monstersTable, characterId, characterLevel);

    res.status(200).json({ result: monstersTable });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const fightMonster = async (req, res) => {
  const { monsterId } = req.body;
  console.log(`fightMonster, monsterId: ${monsterId}`);

  try {
    if (!mongoose.Types.ObjectId.isValid(monsterId)) return res.status(404).send(`No monster with id: ${monsterId}`);

    let monster = await Monster.findById(monsterId);
    const { characterId } = monster;
    const characterBeforeFight = await Character.findById(characterId);

    const { characterAfterFight, fightLog } = fightCharacterVsMonster(characterBeforeFight, monster);
    if (fightLog.didWin) {
      await Monster.findByIdAndRemove(monster._id);
      monster = await generateNewMonster(Number(characterAfterFight.level), characterId);
      await monster.save();
    }

    const updatedCharacter = await Character.findByIdAndUpdate(characterAfterFight._id, characterAfterFight, { new: true });

    res.status(201).json({ result: { monster, updatedCharacter, fightLog } });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
