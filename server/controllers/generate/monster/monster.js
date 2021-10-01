import Monster from '../../../models/monster.js';
import {ARCHER, getSubtype, getType, MAGE, NUMBER_OF_SUBTYPES, NUMBER_OF_TYPES, WARRIOR} from "./monsterConstants.js";

export const generateNewMonster = (characterLevel, characterId) => {
    const type = generateType();
    const subtype = generateSubtype();
    const level = generateLevel(characterLevel);
    const enhancementMultiplier = generateEnhancementMultiplier();
    const { healthpoints, damage, experienceOnKill, lootCategory } = generateStatistics(level, subtype, enhancementMultiplier);

    return new Monster({
        type,
        subtype,
        level,
        healthpoints,
        damage,
        experienceOnKill,
        lootCategory,
        characterId
    });
};


const generateType = () => {
    const index = generateRandomIntegerNumber(0, NUMBER_OF_TYPES);
    return getType(index);
};

const generateSubtype = () => {
    const index = generateRandomIntegerNumber(0, NUMBER_OF_SUBTYPES);
    return getSubtype(index);
};

const generateLevel = characterLevel => {
    let minLevel, maxLevel;

    if (characterLevel < 4) minLevel = 1;
    else minLevel = characterLevel - 3;
    maxLevel = characterLevel + 3;

    return generateRandomIntegerNumber(minLevel, maxLevel);
};

const generateEnhancementMultiplier = () => {
    return generateRandomFloatNumber(0.7, 1.4);
}

const generateStatistics = (level, subtype, enhancementMultiplier) => {
    const healthpoints = (level + 10) * enhancementMultiplier;
    const damage = (level + 10) * enhancementMultiplier;
    const experienceOnKill = Math.floor((level + 10) * enhancementMultiplier);
    switch (subtype) {
        case WARRIOR:
            return { healthpoints: Math.floor(healthpoints * 1.5), damage: Math.floor(damage * 0.4), experienceOnKill };
        case ARCHER:
            return { healthpoints: Math.floor(healthpoints * 0.9), damage: Math.floor(damage * 1.1), experienceOnKill };
        case MAGE:
            return { healthpoints: Math.floor(healthpoints * 0.5), damage: Math.floor(damage * 1.8), experienceOnKill };
        default:
            return { healthpoints, damage, experienceOnKill };
    }
};

const generateRandomIntegerNumber = (min, max) =>  {
    return Math.floor(Math.random() * (max - min) + min);
};

const generateRandomFloatNumber = (min, max) =>  {
    return (Math.random() * (max - min) + min).toFixed(1);
};
