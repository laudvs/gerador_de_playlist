import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const SPOTIFY_API_URL = 'https://api.spotify.com/v1';
const SPOTIFY_API_KEY = process.env.SPOTIFY_API_KEY; // Add this line to use the environment variable


export const isTokenValid = (accessToken) => {
    return accessToken && accessToken.length > 0 && !isTokenExpired(accessToken); // Check for token presence and expiration

};

export const isTokenExpired = (accessToken) => {
    // Implement logic to check if the token is expired
    // This could involve decoding the token and checking the 'exp' claim
    const tokenPayload = JSON.parse(atob(accessToken.split('.')[1]));
    return Date.now() >= tokenPayload.exp * 1000;
}

export const getSpotifyUserProfile = async (accessToken) => {


    try {
        const response = await axios.get(`${SPOTIFY_API_URL}/me`, { 
            headers: { Authorization: `Bearer ${SPOTIFY_API_KEY}` }, // Use the environment variable for the API key

            headers: { Authorization: `Bearer ${accessToken}` },
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao obter perfil do Spotify:', error.response ? error.response.data : error.message);

        throw error;
    }
};

export const createSpotifyPlaylist = async (accessToken, userId, name, description) => {
    try {
        const response = await axios.post(
            `${SPOTIFY_API_URL}/users/${userId}/playlists`,
            { name, description, public: true },
            { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        return response.data;
    } catch (error) {
        console.error('Erro ao criar playlist no Spotify:', error.response ? error.response.data : error.message);

        throw error;
    }
};
