import mongoose from 'mongoose';
import Character from '../models/character.js';
import {
  characterDamageFormula,
  characterDefenseFormula,
  characterHealthpointsFormula, experienceRequiredForLevel, totalExperienceRequiredForLevel,
} from './formulas/formulas.js';
import { levelUp } from './fights/actions/character.js';

export const createCharacter = async (req, res) => {
  const { nickname, vocation, userId } = req.body;
  console.log(`createCharacter for user ${userId}`);

  const existingCharacter = await Character.findOne({ userId });
  if (existingCharacter) {
    return res.status(404).json({ message: 'You have already created a character!' });
  }

  const statistics = setVocationStatistics(vocation);
  try {
    const newCharacter = await Character.create({
      userId,
      nickname,
      vocation,
      statistics,
      level: 1,
      experience: 0,
      experienceToLevelDown: experienceRequiredForLevel(1),
      experienceToLevelUp: experienceRequiredForLevel(2),
      totalExperienceToLevelUp: totalExperienceRequiredForLevel(2),
      healthpoints: characterHealthpointsFormula(1, vocation),
      maxHealthpoints: characterHealthpointsFormula(1, vocation),
      damage: characterDamageFormula(1),
      defense: characterDefenseFormula(1),
    });

    res.status(200).json({ result: newCharacter });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

function setVocationStatistics(vocation) {
  switch (vocation) {
    case 'warrior':
      return { strength: 10, dexterity: 0, intelligence: 0 };
    case 'mage':
      return { strength: 0, dexterity: 0, intelligence: 10 };
    case 'berserker':
      return { strength: 0, dexterity: 10, intelligence: 0 };
    default:
      return { strength: 0, dexterity: 0, intelligence: 0 };
  }
}

export const getCharacter = async (req, res) => {
  const { userId } = req.body;
  console.log(`getCharacter with userId: ${userId}`);

  try {
    let character = await Character.findOne({ userId });

    // if any field is added to the character schema during the development process, change this function
    // to insert it into the existing characters here.
    character = await updateNewChanges(character);

    res.status(200).json({ result: character });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// eslint-disable-next-line arrow-body-style
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
  const updatedCharacter = req.body;
  console.log(`updateCharacter for userId ${updatedCharacter.userId}`);

  try {
    if (!mongoose.Types.ObjectId.isValid(updatedCharacter._id)) return res.status(404).send(`No character with id: ${updatedCharacter.userId}`);

    const newCharacter = await Character.findByIdAndUpdate(updatedCharacter._id, updatedCharacter, { new: true });
    res.status(200).json({ result: newCharacter });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// TODO just for button testing purposes, should be deleted in 1.0 version
export const increaseStatistic = async (req, res) => {
  const { statistic, value, characterId } = req.body;
  console.log(`updating ${statistic} by ${value} for character with id ${characterId} `);

  try {
    if (!mongoose.Types.ObjectId.isValid(characterId)) return res.status(404).send(`No character with id: ${characterId}`);

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
        console.log(updatedCharacter.experience, updatedCharacter.totalExperienceToLevelUp);
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
