import Monster from '../../../models/monster.js';
import { ARCHER, getSubtype, getType, MAGE, NUMBER_OF_SUBTYPES, NUMBER_OF_TYPES, WARRIOR } from '../../constants/monsterConstants.js';
import {
  monsterDamageFormula,
  monsterDefenseFormula,
  monsterExperienceOnKillFormula,
  monsterHealthpointsFormula,
} from '../../fights/formulas/formulas.js';

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

const generateType = () => {
  const index = generateRandomIntegerNumber(0, NUMBER_OF_TYPES);
  return getType(index);
};

const generateSubtype = () => {
  const index = generateRandomIntegerNumber(0, NUMBER_OF_SUBTYPES);
  return getSubtype(index);
};

const generateLevel = (characterLevel) => {
  let minLevel;
  const maxLevel = characterLevel + 3;

  if (characterLevel < 4) minLevel = 1;
  else minLevel = characterLevel - 3;

  return generateRandomIntegerNumber(minLevel, maxLevel);
};

const generateEnhancementMultiplier = () => generateRandomFloatNumber(0.7, 1.4);

const generateStatistics = (level, subtype, enhancementMultiplier) => {
  const healthpoints = Math.floor(monsterHealthpointsFormula(level) * enhancementMultiplier);
  const damage = Math.floor(monsterDamageFormula(level) * enhancementMultiplier);
  const defense = Math.floor(monsterDefenseFormula(level) * enhancementMultiplier);
  const experienceOnKill = Math.floor(monsterExperienceOnKillFormula(level) * enhancementMultiplier);

  switch (subtype) {
    case WARRIOR:
      return {
        healthpoints: Math.floor(healthpoints * 1.5),
        damage: Math.floor(damage * 0.7),
        defense: Math.floor(defense * 1.3),
        experienceOnKill,
      };
    case ARCHER:
      return {
        healthpoints: Math.floor(healthpoints),
        damage: Math.floor(damage),
        defense: Math.floor(defense),
        experienceOnKill,
      };
    case MAGE:
      return {
        healthpoints: Math.floor(healthpoints * 0.5),
        damage: Math.floor(damage * 1.3),
        defense: Math.floor(defense * 0.7),
        experienceOnKill,
      };
    default:
      return {
        healthpoints,
        damage,
        defense,
        experienceOnKill,
      };
  }
};

const generateRandomIntegerNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateRandomFloatNumber = (min, max) => (Math.random() * (max - min) + min).toFixed(1);
