// rarity
import { generateRandomIntegerNumber } from '../classes/genericFunctions.js';

export const COMMON = 'common';
export const UNCOMMON = 'uncommon';
export const RARE = 'rare';
export const LEGENDARY = 'legendary';
export const ARRAY_OF_ITEM_RARITIES = [COMMON, UNCOMMON, RARE, LEGENDARY];
export const NUMBER_OF_ITEM_RARITIES = ARRAY_OF_ITEM_RARITIES.length;

export const getItemRarity = (index) => ARRAY_OF_ITEM_RARITIES[index];

// types
export const HEAD = 'head';
export const BODY = 'body';
export const LEGS = 'legs';
export const FEET = 'feet';
export const HANDS = 'hands';
export const WEAPON = 'weapon';
export const ARRAY_OF_ITEM_TYPES = [HEAD, BODY, LEGS, FEET, HANDS, WEAPON];
export const NUMBER_OF_ITEM_TYPES = ARRAY_OF_ITEM_TYPES.length;

export const getItemType = (index) => ARRAY_OF_ITEM_TYPES[index];

// subtypes
export const HELMET = 'helmet';
export const ARRAY_OF_HEAD_SUBTYPES = [HELMET];
export const NUMBER_OF_HEAD_SUBTYPES = ARRAY_OF_HEAD_SUBTYPES.length;

export const ARMOR = 'armor';
export const ARRAY_OF_BODY_SUBTYPES = [ARMOR];
export const NUMBER_OF_BODY_SUBTYPES = ARRAY_OF_BODY_SUBTYPES.length;

export const LEGWEAR = 'legwear';
export const ARRAY_OF_LEGS_SUBTYPES = [LEGWEAR];
export const NUMBER_OF_LEGS_SUBTYPES = ARRAY_OF_LEGS_SUBTYPES.length;

export const BOOTS = 'boots';
export const ARRAY_OF_FEET_SUBTYPES = [BOOTS];
export const NUMBER_OF_FEET_SUBTYPES = ARRAY_OF_FEET_SUBTYPES.length;

export const GLOVES = 'gloves';
export const ARRAY_OF_HANDS_SUBTYPES = [GLOVES];
export const NUMBER_OF_HANDS_SUBTYPES = ARRAY_OF_HANDS_SUBTYPES.length;

export const getArmorSubType = (type) => {
  let index;
  switch (type) {
    case HEAD:
      index = generateRandomIntegerNumber(0, NUMBER_OF_HEAD_SUBTYPES);
      return ARRAY_OF_HEAD_SUBTYPES[index];
    case BODY:
      index = generateRandomIntegerNumber(0, NUMBER_OF_BODY_SUBTYPES);
      return ARRAY_OF_BODY_SUBTYPES[index];
    case LEGS:
      index = generateRandomIntegerNumber(0, NUMBER_OF_LEGS_SUBTYPES);
      return ARRAY_OF_LEGS_SUBTYPES[index];
    case FEET:
      index = generateRandomIntegerNumber(0, NUMBER_OF_FEET_SUBTYPES);
      return ARRAY_OF_FEET_SUBTYPES[index];
    case HANDS:
      index = generateRandomIntegerNumber(0, NUMBER_OF_HANDS_SUBTYPES);
      return ARRAY_OF_HANDS_SUBTYPES[index];
    default:
      return null;
  }
};

// weapon subtypes
export const SWORD = 'sword';
export const SHIELD = 'shield';
export const AXE = 'axe';
export const WAND = 'wand';
export const ARRAY_OF_WEAPON_SUBTYPES = [SWORD, SHIELD, AXE, WAND];
export const NUMBER_OF_WEAPON_SUBTYPES = ARRAY_OF_WEAPON_SUBTYPES.length;

export const getWeaponSubType = (index) => ARRAY_OF_WEAPON_SUBTYPES[index];

export const ONE_HANDED = 'one-handed';
export const TWO_HANDED = 'two-handed';
