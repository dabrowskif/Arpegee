
import {levelDown, levelUp} from "./actions/character.js";
import {isDead, performHit} from "./actions/fight.js";
import {experienceRequiredForLevel, totalExperienceRequiredForLevel} from "../formulas/formulas.js";

//TODO equipment implementation and calculations
//TODO spells and passives implementation and calculations
export const fightCharacterVsMonster = (character, monster) => {
    console.log('fightCharacterVsMonster');

    let fighter1 = character;
    let fighter2 = monster;
    let isCharacterAttacking = true;
    const fightLog = {
        roundLogs: [],
        didWin: false,
        newLevel: 0,
    };

    while (!isDead(fighter1)) {
        const hitDamage = performHit(fighter1, fighter2);

        const roundLog = {
            isCharacterAttacking,
            hitReciever: {
                healthpointsAfterHit: fighter2.healthpoints,
                hitDamage,
            }
        };

        fightLog.roundLogs.push(roundLog);

        [fighter1, fighter2] = [fighter2, fighter1]
        isCharacterAttacking = !isCharacterAttacking;
    }

    // if isCharacterAttacking statement is true in this case, that means that the character got killed.
    if (isCharacterAttacking) {
        fightLog.didWin = false;
        levelDown(fighter1);

        return { characterAfterFight: fighter1, fightLog };
    } else {
        fightLog.didWin = true;
        fighter2.experience += fighter1.experienceOnKill;
        while (fighter2.experience >= totalExperienceRequiredForLevel(fighter2.level + 1)) {
            levelUp(fighter2);
            fightLog.newLevel = fighter2.level;
        }

        return { characterAfterFight: fighter2, fightLog};
    }
}
