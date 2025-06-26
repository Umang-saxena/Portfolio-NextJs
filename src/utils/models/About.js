import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema({
    name: String,
    email: String,
    github: String,
    
    linkedin: String,
    phone: String,
    address: String,
    image: String,
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
},{timestamps: true})

export const About = mongoose.models.About || mongoose.model('About', AboutSchema);