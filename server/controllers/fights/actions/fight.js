
export const performHit = (performer, target) => {
    const damageDealt = Math.abs(calculateDamage(performer) - calculateDefense(target));

    target.healthpoints -= damageDealt;

    return damageDealt;
}


export const calculateDamage = performer => {
    return performer.damage;
}

export const calculateDefense = target => {
    return target.defense;
}


export const isDead = fighter => {
    return fighter.healthpoints <= 0;
}
