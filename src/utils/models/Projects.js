import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    githublink: String,
    demolink: String,
    technologies: [String],
    createdAt: {
        type: Date,
        default: Date.now
    },
},{timestamps: true});

export const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);
