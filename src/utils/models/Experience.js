import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
    company: String,
    role: String,
    startDate: Date,
    endDate: {
        type: mongoose.Schema.Types.Mixed,  // Allows Date or "Present"
        default: null
    },
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
},{timestamps: true})

export const Experience = mongoose.models.Experience || mongoose.model('Experience', ExperienceSchema); 