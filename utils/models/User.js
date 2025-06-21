// src/utils/models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});

export const User = mongoose.models.User || mongoose.model('User', UserSchema);
