import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
    name: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
},{timestamps: true})

export const Skill = mongoose.models.Skill || mongoose.model('Skill', SkillSchema);
