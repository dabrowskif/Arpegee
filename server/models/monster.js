import mongoose from "mongoose";

const monsterSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    subtype: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required:  true
    },
    healthpoints: {
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
    experienceOnKill: {
        type: Number,
        required: true,
    },
    /*lootCategory: {
        type: Number,
        required: true,
    },*/
    characterId: {
        type: String,
        required: true,
    }
});

export default mongoose.model("Monster", monsterSchema);
