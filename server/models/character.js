import mongoose from "mongoose";

const characterSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required:  true
    },
    vocation: {
        type: String,
        required:  true
    },
    level: {
        type: Number,
        required:  true
    },
    experience: {
        type: Number,
        required:  true
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
    }
});

export default mongoose.model("Character", characterSchema);