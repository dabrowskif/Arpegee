export const generateRandomIntegerNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const generateRandomFloatNumber = (min, max) => (Math.random() * (max - min) + min).toFixed(1);
