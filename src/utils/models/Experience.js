import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
    company: String,
    role: String,
    startDate: Date,
    endDate: Date,
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
},{timestamps: true})

export const Experience = mongoose.models.Experience || mongoose.model('Experience', ExperienceSchema); 