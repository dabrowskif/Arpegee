export const BASE_PLAYER_HP = 100;
export const WARRIOR_HP_PER_LEVEL = 15;
export const BERSERKER_HP_PER_LEVEL = 10;
export const MAGE_HP_PER_LEVEL = 5;

// character classes
export const WARRIOR = 'warrior';
export const BERSERKER = 'berserker';
export const MAGE = 'mage';
export const ARRAY_OF_CHARACTER_CLASSES = [WARRIOR, BERSERKER, MAGE];
export const NUMBER_OF_CHARACTER_CLASSES = ARRAY_OF_CHARACTER_CLASSES.length;

export const getCharacterType = (index) => ARRAY_OF_CHARACTER_CLASSES[index];
