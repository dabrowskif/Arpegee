import {
    characterDamageFormula,
    characterDefenseFormula,
    characterHealthpointsFormula,
    experienceRequiredForLevel,
    totalExperienceRequiredForLevel
} from "../formulas/formulas.js";

// TODO finish creating this class

export default class Character {
    userId;
    nickname = '';
    vocation = '';
    level = 1;
    experience = 0;
    totalExperienceToLevelUp = 0;
    experienceToLevelDown = 0;
    experienceToLevelUp = 0;
    healthpoints = 0;
    maxHealthpoints = 0;
    damage = 0;
    defense = 0;
    statistics = { strength: 0, dexterity: 0, intelligence: 0 };
    gold = 0;
    equippedItems = { head: null, body: null, legs: null, boots: null, weapon1: null, hands: null };
    backpack = [];

    constructor(obj = {}){
        if (obj) {
            Object.assign(this, obj);
        }
    }

    generateNew = (nickname, vocation, userId) => {
        this.nickname = nickname;
        this.vocation = vocation;
        this.userId = userId;
        this.level = 1;
        this.experience = 0;
        this.totalExperienceToLevelUp = totalExperienceRequiredForLevel(2);
        this.experienceToLevelDown = experienceRequiredForLevel(1);
        this.experienceToLevelUp = experienceRequiredForLevel(2);
        this.healthpoints = characterHealthpointsFormula(1, vocation);
        this.maxHealthpoints = characterHealthpointsFormula(1, vocation);
        this.damage = characterDamageFormula(1);
        this.defense = characterDefenseFormula(1);
        this.statistics = this.setVocationStatistics(vocation);
    }

    levelUp = () => {
        this.level += 1;
        this.setNewStatistics();
        this.experience =totalExperienceRequiredForLevel(this.level);
    }

    experienceUp = (experienceGained) => {
        this.experience += experienceGained;
        const newLevel = this.checkNewLevel();

        return { newLevel, experienceGained };
    };

    experienceDown = () => {
        const experienceLost = Math.floor(this.experience / 100);
        this.experience -= experienceLost;
        this.setNewStatistics();
        const newLevel = this.checkNewLevel();

        return { newLevel, experienceLost };
    };

    checkNewLevel = () => {
        while (this.experience < this.totalExperienceToLevelUp - this.experienceToLevelUp) {
            this.level -= 1;
            this.setNewStatistics();
        }
        while (this.experience >= totalExperienceRequiredForLevel(this.level + 1)) {
            this.level += 1;
            this.setNewStatistics();
        }

        return this.level;
    };

    setNewStatistics = () => {
        this.healthpoints = characterHealthpointsFormula(this.level, this.vocation);
        this.maxHealthpoints = characterHealthpointsFormula(this.level, this.vocation);
        this.experienceToLevelDown = experienceRequiredForLevel(this.level) - 1;
        this.experienceToLevelUp = experienceRequiredForLevel(this.level + 1);
        this.totalExperienceToLevelUp = totalExperienceRequiredForLevel(this.level + 1);
        this.defense = characterDefenseFormula(this.level);
        this.damage = characterDamageFormula(this.level);
    };

    addItemToBackpack(item) {
        this.backpack.append(item);
    };
    removeItemFromBackpack(itemId) {
        this.backpack.filter( item =>  item.id !== itemId);
    };

    setVocationStatistics = () => {
        switch (this.vocation) {
            case 'warrior':
                return { strength: 10, dexterity: 0, intelligence: 0 };
            case 'mage':
                return { strength: 0, dexterity: 0, intelligence: 10 };
            case 'berserker':
                return { strength: 0, dexterity: 10, intelligence: 0 };
            default:
                return { strength: 0, dexterity: 0, intelligence: 0 };
        }
    };


    equipItem() {};
    unequipItem() {};
}
