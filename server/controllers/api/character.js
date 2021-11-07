import Character from '../../models/character.js';
import { levelUp } from '../fights/actions/character.js';
import { dbCreateCharacter, dbGetCharacterByUserId, dbUpdateCharacter } from './databaseActions/character.js';
import { isIdValid } from './databaseActions/generic.js';

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
  console.log(`getCharacter with userId: ${userId}`);

  try {
    const character = await dbGetCharacterByUserId(userId);
    // NOT for production
    // if any field is added to the character schema during the development process, change this function
    // to insert it into the existing characters here.
    // character = await updateNewChanges(character);

    res.status(200).json({ result: character });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// eslint-disable-next-line arrow-body-style,no-unused-vars
const updateNewChanges = async (character) => {
  // For example, if healthpoints was recently added to the character model, "if statement" uploads it to all existing characters.
  // Change healthpoints to any newly added field.
  /* if (character.healthpoints === undefined) {
    character.healthpoints = characterHealthpointsFormula(1, character.vocation);
    character = await Character.findByIdAndUpdate(character._id, character);
  } */
  return character;
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
      const characterToUpdate = await Character.findById(characterId);
      levelUp(characterToUpdate);
      updatedCharacter = await Character.findByIdAndUpdate(characterId, characterToUpdate, { new: true });

      return res.status(200).json({ result: updatedCharacter });
    } if (statistic === 'healthpoints') {
      updatedCharacter = await Character.findByIdAndUpdate(characterId, { $inc: { healthpoints: Number(value) } }, { new: true });

      if (updatedCharacter.healthpoints > updatedCharacter.maxHealthpoints) updatedCharacter = await Character.findByIdAndUpdate(characterId, { healthpoints: updatedCharacter.maxHealthpoints }, { new: true });

      return res.status(200).json({ result: updatedCharacter });
    } if (statistic === 'experience') {
      updatedCharacter = await Character.findByIdAndUpdate(characterId, { $inc: { experience: Number(value) } }, { new: true });

      if (updatedCharacter.experience > updatedCharacter.totalExperienceToLevelUp) {
        updatedCharacter = await Character.findByIdAndUpdate(characterId, { experience: updatedCharacter.totalExperienceToLevelUp - 1 }, { new: true });
      }

      return res.status(200).json({ result: updatedCharacter });
    }
    switch (statistic) {
      case 'dexterity':
        updatedCharacter = await Character.findByIdAndUpdate(characterId, { $inc: { 'statistics.dexterity': Number(value) } }, { new: true });
        return res.status(200).json({ result: updatedCharacter });
      case 'intelligence':
        updatedCharacter = await Character.findByIdAndUpdate(characterId, { $inc: { 'statistics.intelligence': Number(value) } }, { new: true });
        return res.status(200).json({ result: updatedCharacter });
      case 'strength':
        updatedCharacter = await Character.findByIdAndUpdate(characterId, { $inc: { 'statistics.strength': Number(value) } }, { new: true });
        return res.status(200).json({ result: updatedCharacter });
      default:
        return res.status(200).json({ result: updatedCharacter });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
