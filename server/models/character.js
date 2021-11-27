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
      required: true,
    },
    dexterity: {
      type: Number,
      required: true,
    },
    intelligence: {
      type: Number,
      required: true,
    },
  },
  gold: {
    type: Number,
    required: true,
  },
  equippedItems: {
    head: {
      type: Object,
    },
    body: {
      type: Object,
    },
    legs: {
      type: Object,
    },
    boots: {
      type: Object,
    },
    hands: {
      type: Object,
    },
    weapon1: {
      type: Object,
    },
  },
  backpack: [],
});

export default mongoose.model('Character', characterSchema);
