import { v4 as uuidv4 } from 'uuid';
import {
  ARRAY_OF_ITEM_RARITIES, BODY,
  COMMON, FEET, getArmorSubType,
  getItemRarity,
  getItemType, getWeaponSubType, HANDS, HEAD, LEGENDARY, LEGS,
  NUMBER_OF_ITEM_RARITIES,
  NUMBER_OF_ITEM_TYPES, NUMBER_OF_WEAPON_SUBTYPES, ONE_HANDED, RARE, SHIELD, TWO_HANDED, UNCOMMON, WAND,
  WEAPON
} from "../constants/itemConstants.js";
import {generateRandomFloatNumber, generateRandomIntegerNumber} from "./genericFunctions.js";
import {getCharacterType, MAGE, NUMBER_OF_CHARACTER_CLASSES} from "../constants/playerConstants.js";
import {itemGenericStatisticFormula} from "../constants/formulas/formulas.js";

export default class Item {
  itemLevel = 0;
  id = 0;
  type = '';
  subtype = '';
  rarity = '';
  handsUsed = 1;
  requiredClass = '';

  statistics = {
    defense: 0,
    damage: 0,
    dexterity: 0,
    strength: 0,
    intelligence: 0,
  };

  constructor(characterLevel) {
    this.itemLevel = this.generateLevel(characterLevel);
    this.id = uuidv4();
    this.type = this.generateType();
    this.subtype = this.generateSubtype();
    this.rarity = this.generateRarity();
    this.handsUsed = this.generateHandsUsed();
    this.requiredClass = this.generateRequiredClass();
    this.generateStatistics();
  }

  showItem = () => {
    console.log(this);
  }

  generateLevel = (characterLevel) => {
    let minLevel;
    const maxLevel = characterLevel + 3;

    if (characterLevel < 10) minLevel = 1;
    else minLevel = characterLevel - 10;

    return generateRandomIntegerNumber(minLevel, maxLevel);
  };

  generateType = () => {
    const index = generateRandomIntegerNumber(0, NUMBER_OF_ITEM_TYPES);
    return getItemType(index);
  };

  generateSubtype = () => {
    if (this.type === WEAPON) {
      const index = generateRandomIntegerNumber(0, NUMBER_OF_WEAPON_SUBTYPES);
      return getWeaponSubType(index);
    }
    else {
      return getArmorSubType(this.type);
    }
  };

  generateRarity = () => {
    const percentValue = Math.random();

    if (percentValue < 0.4) {
      return getItemRarity(0);
    } else if (percentValue < 0.7) {
      return getItemRarity(1);
    } else if (percentValue < 0.9) {
      return getItemRarity(2);
    } else {
      return getItemRarity(3);
    }
  }

  generateHandsUsed = () => {
    const number = generateRandomIntegerNumber(0, 1);

    if (this.type === WEAPON) {
      if (number === 0 || this.subtype === SHIELD || this.subtype === WAND)
        return ONE_HANDED;
      else
        return TWO_HANDED;
    }
    return 0;
  }

  generateRequiredClass = () => {
    const index = generateRandomIntegerNumber(0, NUMBER_OF_CHARACTER_CLASSES);
    if (this.subtype === WAND) {
      return MAGE;
    }
    return getCharacterType(index);
  }

  generateStatistics = () => {
    for (const statistic in this.statistics) {
      this.statistics = {...this.statistics, [statistic]: Math.floor(itemGenericStatisticFormula(this.itemLevel) * this.generateEnhancementMultiplier())}
    }

    /*switch(this.type) {
      case WEAPON:
      case HEAD:
      case BODY:
      case LEGS:
      case FEET:
      case HANDS:
      default:
    }*/
  }

  generateEnhancementMultiplier = () => {
    switch (this.rarity) {
      case COMMON:
        return generateRandomFloatNumber(1, 1.4);
      case UNCOMMON:
        return generateRandomFloatNumber(1.4, 2);
      case RARE:
        return generateRandomFloatNumber(2, 3);
      case LEGENDARY:
        return generateRandomFloatNumber(3, 5);
      default:
        return generateRandomFloatNumber(1, 1);
    }
  }

}
