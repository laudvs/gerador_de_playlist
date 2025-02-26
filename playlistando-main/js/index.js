const CLIENT_ID = 'fbee77cb4260418da4d4763262df76e3';
const REDIRECT_URI = 'http://localhost:5500/playlistando-main/pages/inicio.html';

const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token';
const SCOPE = 'playlist-modify-public playlist-modify-private';

import { handleSpotifyLogin } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('spotify-login').addEventListener('click', handleSpotifyLogin);
});
