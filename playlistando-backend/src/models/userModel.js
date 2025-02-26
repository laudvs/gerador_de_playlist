import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    spotifyId: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    email: { type: String },
    createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

export default User;