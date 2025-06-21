import mongoose from 'mongoose';

const TechnologySchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    link: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
},{timestamps: true});

export const Technology = mongoose.models.Technology || mongoose.model('Technology', TechnologySchema);
