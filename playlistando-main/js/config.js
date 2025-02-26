const CONFIG = {
    CLIENT_ID: process.env.CLIENT_ID,
    REDIRECT_URI: 'http://localhost:5500/playlistando-main/pages/inicio.html',

    AUTH_ENDPOINT: 'https://accounts.spotify.com/authorize',
    RESPONSE_TYPE: 'token',
    SCOPE: 'playlist-modify-public playlist-modify-private',
    SPOTIFY_API_URL: 'https://api.spotify.com/v1',
    OPENAI_API_URL: 'https://api.openai.com/v1',
    OPENAI_API_KEY: process.env.OPENAI_API_KEY
};

export default CONFIG;