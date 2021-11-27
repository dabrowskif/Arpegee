import CharacterModel from '../../../models/character.js';
import Character from '../../classes/character.js';

export const dbGetCharacter = async (characterId) => CharacterModel.findById(characterId).lean();
export const dbGetCharacterByUserId = async (userId) => CharacterModel.findOne({ userId }).lean();
export const dbUpdateCharacter = async (character) => CharacterModel.findByIdAndUpdate(character._id, character, { new: true });

export const dbCreateCharacter = async (nickname, vocation, userId) => {
  const character = new Character();
  character.generateNew(nickname, vocation, userId);

  return CharacterModel.create({ ...character });
};
