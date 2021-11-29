import { fightCharacterVsMonster } from '../fights/fights.js';
import {
  dbGetMonster,
  dbRemoveMonster,
  dbGetMonsters,
  dbRefillMonsters,
  dbDeleteAllMonsters, dbCreateMonster,
} from './databaseFunctions/arena.js';
import { isIdValid } from './databaseFunctions/generic.js';
import { dbGetCharacter, dbUpdateCharacter } from './databaseFunctions/character.js';
import Character from '../classes/character.js';
import Item from '../classes/item.js';

// TODO think about usefulness of this function
export const createMonster = async (req, res) => {
  const { characterId } = req.body;
  console.log(`createMonster - characterId: ${characterId}`);

  try {
    if (!isIdValid(characterId)) {
      return res.status(404).send(`No character with id: ${characterId}`);
    }

    const character = await dbGetCharacter(characterId);
    const monster = await dbCreateMonster(Number(character.level), characterId);

    res.status(201).json({ result: monster });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getMonsters = async (req, res) => {
  const { characterId } = req.query;
  console.log(`getMonsters - characterId: ${characterId}`);

  try {
    if (!isIdValid(characterId)) {
      return res.status(404).send(`No character with id: ${characterId}`);
    }

    const character = await dbGetCharacter(characterId);
    const monsters = await dbGetMonsters(characterId);
    const newMonsters = await dbRefillMonsters(monsters, characterId, character.level);

    res.status(200).json({ result: newMonsters });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const resetMonsters = async (req, res) => {
  const { characterId } = req.query;
  console.log(`resetMonsters - characterId: ${characterId}`);

  try {
    if (!isIdValid(characterId)) {
      return res.status(404).send(`No character with id: ${characterId}`);
    }

    const character = await dbGetCharacter(characterId);
    await dbDeleteAllMonsters(characterId);
    const newMonsters = await dbRefillMonsters([], characterId, character.level);

    res.status(201).json({ result: newMonsters });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const fightMonster = async (req, res) => {
  const { monsterId } = req.params;
  console.log(`fightMonster - monsterId: ${monsterId}`);

  try {
    if (!isIdValid(monsterId)) {
      return res.status(404).send(`No monster with id: ${monsterId}`);
    }

    let monster = await dbGetMonster(monsterId);
    // const characterBeforeFight = await dbGetCharacter(monster.characterId);
    const character = new Character(await dbGetCharacter(monster.characterId));

    const { characterAfterFight, fightLog } = fightCharacterVsMonster(character, monster);

    await dbRemoveMonster(monsterId);
    monster = await dbCreateMonster(Number(characterAfterFight.level), monster.characterId);

    const updatedCharacter = await dbUpdateCharacter(characterAfterFight);

    res.status(201).json({ result: { monster, updatedCharacter, fightLog } });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
