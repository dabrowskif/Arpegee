import {
    characterDamageFormula,
    characterDefenseFormula,
    characterHealthpointsFormula,
    experienceRequiredForLevel,
    totalExperienceRequiredForLevel
} from "../constants/formulas/formulas.js";
import Item from "./item.js";
import {BERSERKER, MAGE, WARRIOR} from "../constants/playerConstants.js";

export default class Character {
    _id;
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
        this.backpack.push(item);
    };
    removeItemFromBackpack(itemId) {
        this.backpack.filter( item =>  item.id !== itemId);
    };

    setVocationStatistics = () => {
        switch (this.vocation) {
            case WARRIOR:
                return { strength: 10, dexterity: 0, intelligence: 0 };
            case MAGE:
                return { strength: 0, dexterity: 0, intelligence: 10 };
            case BERSERKER:
                return { strength: 0, dexterity: 10, intelligence: 0 };
            default:
                return { strength: 0, dexterity: 0, intelligence: 0 };
        }
    };

    equipItem() {};
    unequipItem() {};

    generateItems = (numberOfItems) => {
        const itemsLooted = [];
        for (let i = 0; i < numberOfItems; i++) {
            const newItem = new Item(this.level);
            this.addItemToBackpack(newItem);
            itemsLooted.push(newItem);
        }
        return itemsLooted;
    }
}
