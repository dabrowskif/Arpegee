import mongoose from 'mongoose';

const characterSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  vocation: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  totalExperienceToLevelUp: {
    type: Number,
    required: true,
  },
  experienceToLevelDown: {
    type: Number,
    required: true,
  },
  experienceToLevelUp: {
    type: Number,
    required: true,
  },
  healthpoints: {
    type: Number,
    required: true,
  },
  maxHealthpoints: {
    type: Number,
    required: true,
  },
  damage: {
    type: Number,
    required: true,
  },
  defense: {
    type: Number,
    required: true,
  },
  statistics: {
    strength: {
      type: Number,
    },
    dexterity: {
      type: Number,
    },
    intelligence: {
      type: Number,
    },
  },
  equipment: {
    helmet: {
      type: String,
    },
    chest: {
      type: String,
    },
    legs: {
      type: String,
    },
    boots: {
      type: String,
    },
    weapon1: {
      type: String,
    },
    weapon2: {
      type: String,
    },
  },
});

export default mongoose.model('Character', characterSchema);
