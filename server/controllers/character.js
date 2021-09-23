import Character from '../models/character.js';
import mongoose from "mongoose";

export const createCharacter = async (req, res) => {
    const { nickname, vocation, userId } = req.body;
    const statistics = setVocationStatistics(vocation);
    console.log(`Creating character with nickname: ${nickname}, vocation: ${vocation}, userId: ${userId}`);

    const existingCharacter = await Character.findOne({ userId });
    if(existingCharacter) {
        return res.status(404).json({ message: "You have already created a character!" })
    }

    try {
        const result = await Character.create({ userId, nickname, vocation, level: 1, experience: 0, statistics });

        res.status(200).json({ result: result });
    } catch (error) {
        res.status(500).json( { message: error });
    }
};

function setVocationStatistics(vocation) {
    switch (vocation) {
        case 'warrior':
            return { strength: 10, dexterity: 0, intelligence: 0};
        case 'mage':
            return { strength: 0, dexterity: 0, intelligence: 10};
        case 'berserker':
            return { strength: 0, dexterity: 10, intelligence: 0};
    }
}

export const getCharacter = async (req, res) => {
    const { userId } = req.body;
    console.log(`fetching character from user with id ${userId}`);

    try {
        const result = await Character.findOne({ userId });
        res.status(200).json({ result: result });
    } catch (error) {
        res.status(500).json( { message: error });
    }
};

export const updateCharacter = async (req, res) => {
    const updatedCharacter = req.body;
    console.log(`updating character for user with id ${updatedCharacter.userId}`);
    try {
        if (!mongoose.Types.ObjectId.isValid(updatedCharacter._id)) return res.status(404).send(`No character with id: ${updatedCharacter.userId}`);

        const newCharacter = await Character.findByIdAndUpdate( updatedCharacter._id, updatedCharacter, { new: true } );
        res.status(200).json({ result: newCharacter });
    } catch (error) {
        res.status(500).json( { message: error });
    }
};

