import CharacterModel from '../../models/character.js';
import {
  dbCreateCharacter,
  dbGetCharacter,
  dbGetCharacterByUserId,
  dbUpdateCharacter,
} from './databaseFunctions/character.js';
import { isIdValid } from './databaseFunctions/generic.js';
import Character from '../classes/character.js';

export const createCharacter = async (req, res) => {
  const { nickname, vocation, userId } = req.body;
  console.log(`createCharacter - userId: ${userId}`);

  try {
    const existingCharacter = await dbGetCharacterByUserId(userId);
    if (existingCharacter) {
      return res.status(404).json({ message: 'You have already created a character!' });
    }

    const newCharacter = await dbCreateCharacter(nickname, vocation, userId);

    res.status(201).json({ result: newCharacter });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getCharacter = async (req, res) => {
  const { userId } = req.params;
  console.log(`getCharacter - userId: ${userId}`);

  try {
    // creating class instance and dbUpdateCharacter function is needed to update existing character to contain newly added props to a Character class.
    const character = new Character(await dbGetCharacterByUserId(userId));
    if (character.userId === undefined) {
      await dbUpdateCharacter(character);
    }

    res.status(200).json({ result: character });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateCharacter = async (req, res) => {
  const character = req.body;
  console.log(`updateCharacter - characterId: ${character._id}`);

  try {
    if (!isIdValid(character._id)) {
      return res.status(404).send(`No character with id: ${character._id}`);
    }

    const updatedCharacter = await dbUpdateCharacter(character);

    res.status(200).json({ result: updatedCharacter });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// TODO just for button testing purposes, should be deleted in 1.0 version
export const increaseStatistic = async (req, res) => {
  const { statistic, value, characterId } = req.body;
  console.log(`increaseStatistic -  characterId ${characterId} `);

  try {
    if (!isIdValid(characterId)) {
      return res.status(404).send(`No character with id: ${characterId}`);
    }
    let updatedCharacter = null;

    if (statistic === 'level') {
      const characterToUpdate = new Character(await dbGetCharacter(characterId));

      characterToUpdate.levelUp();

      updatedCharacter = await CharacterModel.findByIdAndUpdate(characterId, characterToUpdate, { new: true });

      return res.status(200).json({ result: updatedCharacter });
    } if (statistic === 'healthpoints') {
      updatedCharacter = await CharacterModel.findByIdAndUpdate(characterId, { $inc: { healthpoints: Number(value) } }, { new: true });

      if (updatedCharacter.healthpoints > updatedCharacter.maxHealthpoints) updatedCharacter = await CharacterModel.findByIdAndUpdate(characterId, { healthpoints: updatedCharacter.maxHealthpoints }, { new: true });

      return res.status(200).json({ result: updatedCharacter });
    } if (statistic === 'experience') {
      updatedCharacter = await CharacterModel.findByIdAndUpdate(characterId, { $inc: { experience: Number(value) } }, { new: true });

      if (updatedCharacter.experience > updatedCharacter.totalExperienceToLevelUp) {
        updatedCharacter = await CharacterModel.findByIdAndUpdate(characterId, { experience: updatedCharacter.totalExperienceToLevelUp - 1 }, { new: true });
      }

      return res.status(200).json({ result: updatedCharacter });
    }
    switch (statistic) {
      case 'dexterity':
        updatedCharacter = await CharacterModel.findByIdAndUpdate(characterId, { $inc: { 'statistics.dexterity': Number(value) } }, { new: true });
        return res.status(200).json({ result: updatedCharacter });
      case 'intelligence':
        updatedCharacter = await CharacterModel.findByIdAndUpdate(characterId, { $inc: { 'statistics.intelligence': Number(value) } }, { new: true });
        return res.status(200).json({ result: updatedCharacter });
      case 'strength':
        updatedCharacter = await CharacterModel.findByIdAndUpdate(characterId, { $inc: { 'statistics.strength': Number(value) } }, { new: true });
        return res.status(200).json({ result: updatedCharacter });
      default:
        return res.status(200).json({ result: updatedCharacter });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
