import {
  characterDamageFormula,
  characterDefenseFormula,
  characterHealthpointsFormula, experienceRequiredForLevel, totalExperienceRequiredForLevel,
} from '../../formulas/formulas.js';

// TODO repair all this logic with leveling up and down

export const experienceUp = (character, experienceGained) => {
  character.experience += experienceGained;
  const newLevel = checkLevelExperience(character);

  return { newLevel, experienceGained };
};

export const experienceDown = (character) => {
  const experienceLost = Math.floor(character.experience / 50);
  character.experience -= experienceLost;
  setNewStatistics(character);
  const newLevel = checkLevelExperience(character);

  return { newLevel, experienceLost };
};

const checkLevelExperience = (character) => {
  while (character.experience < character.totalExperienceToLevelUp - character.experienceToLevelUp) {
    character.level -= 1;
    setNewStatistics(character);
  }
  while (character.experience >= totalExperienceRequiredForLevel(character.level + 1)) {
    character.level += 1;
    setNewStatistics(character);
  }

  return character.level;
};

const setNewStatistics = (character) => {
  character.healthpoints = characterHealthpointsFormula(character.level, character.vocation);
  character.maxHealthpoints = characterHealthpointsFormula(character.level, character.vocation);
  character.experienceToLevelDown = experienceRequiredForLevel(character.level) - 1;
  character.experienceToLevelUp = experienceRequiredForLevel(character.level + 1);
  character.totalExperienceToLevelUp = totalExperienceRequiredForLevel(character.level + 1);
  character.defense = characterDefenseFormula(character.level);
  character.damage = characterDamageFormula(character.level);
};
