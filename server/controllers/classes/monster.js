import {
    monsterDamageFormula,
    monsterDefenseFormula,
    monsterExperienceOnKillFormula,
    monsterHealthpointsFormula,
} from "../constants/formulas/formulas.js";
import {
    ARCHER, getMonsterSubtype, getMonsterType,
    MAGE,
    NUMBER_OF_SUBTYPES,
    NUMBER_OF_MONSTER_TYPES,
    WARRIOR
} from "../constants/monsterConstants.js";
import {generateRandomFloatNumber, generateRandomIntegerNumber} from "./genericFunctions.js";

export default class Monster {
    characterId = '';
    type = '';
    subtype = '';
    level = 1;
    enhancementMultiplier = 0;
    healthpoints = 0;
    damage = 0;
    defense = 0;
    experienceOnKill = 0;

    constructor(characterLevel, characterId){
        this.characterId = characterId;
        this.type = this.generateType();
        this.subtype = this.generateSubtype();
        this.level = this.generateLevel(characterLevel);
        this.enhancementMultiplier = this.generateEnhancementMultiplier();
        const {
            healthpoints,
            damage,
            defense,
            experienceOnKill,
        } = this.generateStatistics(this.level, this.subtype, this.enhancementMultiplier);
        this.healthpoints = healthpoints;
        this.damage = damage;
        this.defense = defense;
        this.experienceOnKill = experienceOnKill;
    };

    generateType = () => {
        const index = generateRandomIntegerNumber(0, NUMBER_OF_MONSTER_TYPES);
        return getMonsterType(index);
    };

    generateSubtype = () => {
        const index = generateRandomIntegerNumber(0, NUMBER_OF_SUBTYPES);
        return getMonsterSubtype(index);
    };

    generateLevel = (characterLevel) => {
        let minLevel;
        const maxLevel = characterLevel + 3;

        if (characterLevel < 4) minLevel = 1;
        else minLevel = characterLevel - 3;

        return generateRandomIntegerNumber(minLevel, maxLevel);
    };

    generateEnhancementMultiplier = () => generateRandomFloatNumber(0.7, 1.4);

    generateStatistics = () => {
        const healthpoints = Math.floor(monsterHealthpointsFormula(this.level) * this.enhancementMultiplier);
        const damage = Math.floor(monsterDamageFormula(this.level) * this.enhancementMultiplier);
        const defense = Math.floor(monsterDefenseFormula(this.level) * this.enhancementMultiplier);
        let experienceOnKill = Math.ceil(monsterExperienceOnKillFormula(this.level) * this.enhancementMultiplier);
        if (experienceOnKill === 0) {
            experienceOnKill = Math.floor(15 * this.enhancementMultiplier);
        }

        switch (this.subtype) {
            case WARRIOR:
                return {
                    healthpoints: Math.floor(healthpoints * 1.5),
                    damage: Math.floor(damage * 0.7),
                    defense: Math.floor(defense * 1.3),
                    experienceOnKill,
                };
            case ARCHER:
                return {
                    healthpoints: Math.floor(healthpoints),
                    damage: Math.floor(damage),
                    defense: Math.floor(defense),
                    experienceOnKill,
                };
            case MAGE:
                return {
                    healthpoints: Math.floor(healthpoints * 0.5),
                    damage: Math.floor(damage * 1.3),
                    defense: Math.floor(defense * 0.7),
                    experienceOnKill,
                };
            default:
                return {
                    healthpoints,
                    damage,
                    defense,
                    experienceOnKill,
                };
        }
    };
}
