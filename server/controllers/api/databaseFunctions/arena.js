import { MAX_MONSTERS_PER_ARENA } from '../../constants/monsterConstants.js';
import MonsterModel from '../../../models/monster.js';
import Monster from '../../classes/monster.js';

export const dbGetMonsters = async (characterId) => MonsterModel.find({ characterId });

export const dbGetMonster = async (monsterId) => MonsterModel.findById(monsterId);

export const dbRemoveMonster = async (monsterId) => MonsterModel.findByIdAndRemove(monsterId);

export const dbCreateMonster = async (characterLevel, characterId) => {
  const monster = new MonsterModel(new Monster(characterLevel, characterId));
  await monster.save();

  return monster;
};

export const dbRefillMonsters = async (monsters, characterId, characterLevel) => {
  const numberOfMonsters = Object.keys(monsters).length;

  if (numberOfMonsters < MAX_MONSTERS_PER_ARENA) {
    for (let i = numberOfMonsters; i < MAX_MONSTERS_PER_ARENA; i += 1) {
      // TODO refactor this
      await dbCreateMonster(Number(characterLevel), characterId);
    }
  } else {
    await monsters.forEach((monster, index) => {
      if (index >= MAX_MONSTERS_PER_ARENA) {
        dbRemoveMonster(monster.id);
      }
    });
  }

  return MonsterModel.find({ characterId });
};

export const dbDeleteAllMonsters = async (characterId) => {
  await MonsterModel.deleteMany({ characterId });
};
