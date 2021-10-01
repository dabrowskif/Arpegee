import Character from '../models/character.js';
import mongoose from "mongoose";

export const createCharacter = async (req, res) => {
    const { nickname, vocation, userId } = req.body;
    const statistics = setVocationStatistics(vocation);
    console.log(`createCharacter: ${nickname}, vocation: ${vocation}, userId: ${userId}`);

    const existingCharacter = await Character.findOne({ userId });
    if(existingCharacter) {
        return res.status(404).json({ message: "You have already created a character!" })
    }

    try {
        const result = await Character.create({ userId, nickname, vocation, level: 1, healthpoints: 100, experience: 0, statistics });

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
    console.log(`getCharacter with userId: ${userId}`);

    try {
        let result = await Character.findOne({ userId });

        //this is needed to update all existing chars as i didn't set healthpoints value for them
        result = await repairHealthpoints(result);

        res.status(200).json({ result: result });
    } catch (error) {
        res.status(500).json( { message: error });
    }
};


const repairHealthpoints = async result => {
    if(result.healthpoints === undefined) {
        result.healthpoints = 100;
        result = await Character.findByIdAndUpdate( result._id, result);
    }
    return result;
};



export const updateCharacter = async (req, res) => {
    const updatedCharacter = req.body;
    console.log(`updateCharacter with userId ${updatedCharacter.userId}`);
    try {
        if (!mongoose.Types.ObjectId.isValid(updatedCharacter._id)) return res.status(404).send(`No character with id: ${updatedCharacter.userId}`);

        const newCharacter = await Character.findByIdAndUpdate( updatedCharacter._id, updatedCharacter, { new: true } );
        res.status(200).json({ result: newCharacter });
    } catch (error) {
        res.status(500).json( { message: error });
    }
};

export const increaseStatistic = async (req, res) => {
    const { statistic, value, characterId } = req.body;
    console.log(`updating ${statistic} by ${value} for character with id ${characterId} `);

    try {
        if (!mongoose.Types.ObjectId.isValid(characterId)) return res.status(404).send(`No character with id: ${characterId}`);
        let newCharacter = null;
        if (statistic === 'level') {
            newCharacter = await Character.findByIdAndUpdate( characterId, { $inc: { 'level': Number(value) } }, { new: true } );
            return res.status(200).json({ result: newCharacter });
        } else {
            switch (statistic) {
                case 'dexterity':
                    newCharacter = await Character.findByIdAndUpdate( characterId, { $inc: { 'statistics.dexterity': Number(value) } }, { new: true } );
                    return res.status(200).json({ result: newCharacter });
                case 'intelligence':
                    newCharacter = await Character.findByIdAndUpdate( characterId, { $inc: { 'statistics.intelligence': Number(value) } }, { new: true } );
                    return res.status(200).json({ result: newCharacter });
                case 'strength':
                    newCharacter = await Character.findByIdAndUpdate( characterId, { $inc: { 'statistics.strength': Number(value) } }, { new: true } );
                    return res.status(200).json({ result: newCharacter });
                default:
                    new Error();
            }
        }
    } catch (error) {
        res.status(500).json( { message: error });
    }
};


