import mongoose from 'mongoose';

const playlistSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    description: { type: String },
    songs: [{ type: String }],
    spotifyPlaylistId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Playlist = mongoose.model('Playlist', playlistSchema);

export default Playlist;