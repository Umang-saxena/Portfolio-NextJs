import mongoose from "mongoose";

const SkillsSchema = new mongoose.Schema({
    name: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
},{timestamps: true})

export const Skills = mongoose.models.Skills || mongoose.model('Skills', SkillsSchema);
