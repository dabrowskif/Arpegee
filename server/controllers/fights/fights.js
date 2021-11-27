import { isDead, performHit } from './fightsActions.js';

// TODO equipment implementation and calculations
// TODO spells and passives implementation and calculations
export const fightCharacterVsMonster = (character, monster) => {
  let fighter1 = character;
  let fighter2 = monster;
  let isCharacterAttacking = true;

  const fightLog = {
    roundLogs: [],
    didWin: false,
    oldLevel: fighter1.level,
    newLevel: 0,
    experienceGained: 0,
    experienceLost: 0,
    loot: {},
  };

  while (!isDead(fighter1)) {
    const hitDamage = performHit(fighter1, fighter2);

    const roundLog = {
      isCharacterAttacking,
      hitReciever: {
        healthpointsAfterHit: fighter2.healthpoints,
        hitDamage,
      },
    };

    fightLog.roundLogs.push(roundLog);

    [fighter1, fighter2] = [fighter2, fighter1];
    isCharacterAttacking = !isCharacterAttacking;
  }

  // if isCharacterAttacking statement is true in this case, that means that the character got killed.
  if (isCharacterAttacking) {
    fightLog.didWin = false;
    const { newLevel, experienceLost } = fighter1.experienceDown();
    fightLog.newLevel = newLevel;
    fightLog.experienceLost = experienceLost;

    return { characterAfterFight: fighter1, fightLog };
  }
  fightLog.didWin = true;
  const { newLevel, experienceGained } = fighter2.experienceUp(fighter1.experienceOnKill);
  fightLog.newLevel = newLevel;
  fightLog.experienceGained = experienceGained;
  return { characterAfterFight: fighter2, fightLog };
};
