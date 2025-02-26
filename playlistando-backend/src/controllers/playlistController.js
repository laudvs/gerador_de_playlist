import { generatePlaylistWithAI } from '../services/openaiService.js';
import { createSpotifyPlaylist } from '../services/spotifyService.js';
import Playlist from '../models/playlistModel.js';

export const createPlaylist = async (req, res) => {
    const { prompt, accessToken, userId } = req.body;

    try {
        // Gerar playlist com IA
        const songs = await generatePlaylistWithAI(prompt);

        // Criar playlist no Spotify
        const spotifyPlaylist = await createSpotifyPlaylist(accessToken, userId, `Playlist: ${prompt}`, 'Criada automaticamente com IA');

        // Salvar playlist no banco de dados
        const newPlaylist = new Playlist({
            userId,
            name: `Playlist: ${prompt}`,
            description: 'Criada automaticamente com IA',
            songs,
            spotifyPlaylistId: spotifyPlaylist.id,
        });
        await newPlaylist.save();

        res.status(201).json({ playlistUrl: spotifyPlaylist.external_urls.spotify });
    } catch (error) {
        console.error('Erro ao criar playlist:', error);
        res.status(500).json({ error: 'Erro ao criar playlist' });
    }
};

export const getPlaylistHistory = async (req, res) => {
    const { userId } = req.params;

    try {
        const playlists = await Playlist.find({ userId }).sort({ createdAt: -1 });
        res.status(200).json(playlists);
    } catch (error) {
        console.error('Erro ao obter histórico de playlists:', error);
        res.status(500).json({ error: 'Erro ao obter histórico de playlists' });
    }
};