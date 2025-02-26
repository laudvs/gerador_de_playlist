import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const handleSpotifyLogin = (req, res) => {
const authUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.SPOTIFY_CLIENT_ID}&redirect_uri=${encodeURIComponent('http://localhost:5500/playlistando-backend/api/auth/callback')}&response_type=code&scope=playlist-modify-public playlist-modify-private`;

    res.redirect(authUrl);
};

export const getSpotifyAccessToken = async (req, res) => {
    const { code } = req.query;
    try {
        const response = await axios.post('https://accounts.spotify.com/api/token', null, {
            params: {
                grant_type: 'authorization_code',
                code,
                redirect_uri: 'http://localhost:5500/playlistando-backend/api/auth/callback',

                client_id: process.env.SPOTIFY_CLIENT_ID,
                client_secret: process.env.SPOTIFY_CLIENT_SECRET,
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        res.json({ accessToken: response.data.access_token });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter token de acesso' });
    }
};
