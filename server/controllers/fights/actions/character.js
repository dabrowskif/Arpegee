import {
  characterDamageFormula,
  characterDefenseFormula,
  characterHealthpointsFormula, experienceRequiredForLevel, totalExperienceRequiredForLevel,
} from '../../formulas/formulas.js';

// TODO repair all this logic with leveling up and down

export const levelUp = (character) => {
  character.level += 1;
  setNewStatistics(character);
};

export const levelDown = (character) => {
  console.log('level down');
  character.experience -= Math.floor(character.experience / 10);
  checkLevelExperience(character);
};

const checkLevelExperience = (character) => {
  while (character.experience < character.totalExperienceToLevelUp - character.experienceToLevelUp) {
    character.level -= 1;
    setNewStatistics(character);
  }
  setNewStatistics(character);
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
