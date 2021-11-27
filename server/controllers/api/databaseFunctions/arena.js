import { MAX_MONSTERS_PER_ARENA } from '../../constants/monsterConstants.js';
import Monster from '../../../models/monster.js';
import {
  generateEnhancementMultiplier,
  generateLevel, generateStatistics,
  generateSubtype,
  generateType,
} from '../../generate/arena/monster.js';

export const dbGetMonsters = async (characterId) => Monster.find({ characterId });

export const dbGetMonster = async (monsterId) => Monster.findById(monsterId);

export const dbRemoveMonster = async (monsterId) => Monster.findByIdAndRemove(monsterId);

export const dbCreateMonster = async (characterLevel, characterId) => {
  const type = generateType();
  const subtype = generateSubtype();
  const level = generateLevel(characterLevel);
  const enhancementMultiplier = generateEnhancementMultiplier();
  const {
    healthpoints,
    damage,
    defense,
    experienceOnKill,
  } = generateStatistics(level, subtype, enhancementMultiplier);

  const monster = new Monster({
    type,
    subtype,
    level,
    healthpoints,
    damage,
    defense,
    experienceOnKill,
    characterId,
  });

  await monster.save();

  return monster;
};

export const dbRefillMonsters = async (monsters, characterId, characterLevel) => {
  const numberOfMonsters = Object.keys(monsters).length;

  if (numberOfMonsters < MAX_MONSTERS_PER_ARENA) {
    for (let i = numberOfMonsters; i < MAX_MONSTERS_PER_ARENA; i += 1) {
      // TODO refactor this
      // eslint-disable-next-line no-await-in-loop
      const monster = await dbCreateMonster(Number(characterLevel), characterId);
      // eslint-disable-next-line no-await-in-loop
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

export const dbDeleteAllMonsters = async (characterId) => {
  await Monster.deleteMany({ characterId });
};
