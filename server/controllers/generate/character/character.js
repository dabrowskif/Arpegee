export const setVocationStatistics = (vocation) => {
  switch (vocation) {
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
