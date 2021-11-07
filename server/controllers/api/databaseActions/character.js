import Character from '../../../models/character.js';
import {
  characterDamageFormula, characterDefenseFormula,
  characterHealthpointsFormula,
  experienceRequiredForLevel,
  totalExperienceRequiredForLevel,
} from '../../fights/formulas/formulas.js';
import { setVocationStatistics } from '../../generate/character/character.js';

export const dbGetCharacter = async (characterId) => Character.findById(characterId);
export const dbGetCharacterByUserId = async (userId) => Character.findOne({ userId });
export const dbUpdateCharacter = async (character) => Character.findByIdAndUpdate(character._id, character, { new: true });

export const dbCreateCharacter = async (userId, nickname, vocation) => Character.create({
  nickname,
  vocation,
  userId,
  level: 1,
  experience: 0,
  experienceToLevelDown: experienceRequiredForLevel(1),
  experienceToLevelUp: experienceRequiredForLevel(2),
  totalExperienceToLevelUp: totalExperienceRequiredForLevel(2),
  healthpoints: characterHealthpointsFormula(1, vocation),
  maxHealthpoints: characterHealthpointsFormula(1, vocation),
  damage: characterDamageFormula(1),
  defense: characterDefenseFormula(1),
  statistics: setVocationStatistics(vocation),
});
