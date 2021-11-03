export const performHit = (performer, target) => {
  const damageDealt = Math.abs(calculateDamage(performer) - calculateDefense(target));

  target.healthpoints -= damageDealt;

  return damageDealt;
};

export const calculateDamage = (performer) => performer.damage;

export const calculateDefense = (target) => target.defense;

export const isDead = (fighter) => fighter.healthpoints <= 0;
