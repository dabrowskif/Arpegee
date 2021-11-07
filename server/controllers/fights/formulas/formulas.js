import {
  BASE_PLAYER_HP, BERSERKER,
  BERSERKER_HP_PER_LEVEL, MAGE,
  MAGE_HP_PER_LEVEL,
  WARRIOR,
  WARRIOR_HP_PER_LEVEL,
} from '../../constants/playerConstants.js';

// experience required to advance from 'level - 1' to 'level'
export const experienceRequiredForLevel = (level) => {
  if (level > 1) {
    return totalExperienceRequiredForLevel(level) - totalExperienceRequiredForLevel(level - 1);
  }
  return 0;
};

// experience required from '1' to 'level'
export const totalExperienceRequiredForLevel = (level) => Math.floor((50 * (level ** 3)) / 3 - 100 * (level ** 2) + (850 * level) / 3 - 200);

export const characterHealthpointsFormula = (level, vocation) => {
  switch (vocation) {
    case WARRIOR:
      return BASE_PLAYER_HP + WARRIOR_HP_PER_LEVEL * (level - 1);
    case BERSERKER:
      return BASE_PLAYER_HP + BERSERKER_HP_PER_LEVEL * (level - 1);
    case MAGE:
      return BASE_PLAYER_HP + MAGE_HP_PER_LEVEL * (level - 1);
    default:
  }
};

export const monsterHealthpointsFormula = (level) => 25 + level * 5;

export const monsterDamageFormula = (level) => level + 13;

export const monsterDefenseFormula = (level) => Math.floor(level / 2 + 4);

export const monsterExperienceOnKillFormula = (level) => Math.floor((50 * (level ** 3)) / 3 - 100 * (level ** 2) + (850 * level) / 3 - 100) / 20;

export const characterDamageFormula = (level) => level + 10;

export const characterDefenseFormula = (level) => Math.floor(level / 2 + 5);
