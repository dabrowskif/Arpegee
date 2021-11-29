// CLIENT SIDE LIMITATIONS
export const MAX_MONSTERS_PER_ARENA = 3;

// TYPE
export const ZOMBIE = 'Zombie';
export const SKELETON = 'Skeleton';
export const SPIDER = 'Spider';
export const ARRAY_OF_MONSTER_TYPES = [ZOMBIE, SKELETON, SPIDER];
export const NUMBER_OF_MONSTER_TYPES = ARRAY_OF_MONSTER_TYPES.length;

export const getMonsterType = (index) => ARRAY_OF_MONSTER_TYPES[index];

// SUBTYPE
export const WARRIOR = 'Warrior';
export const ARCHER = 'Archer';
export const MAGE = 'Mage';
export const ARRAY_OF_SUBTYPES = [WARRIOR, ARCHER, MAGE];
export const NUMBER_OF_SUBTYPES = ARRAY_OF_MONSTER_TYPES.length;

export const getMonsterSubtype = (index) => ARRAY_OF_SUBTYPES[index];
