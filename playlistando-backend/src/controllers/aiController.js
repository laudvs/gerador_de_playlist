import { generatePlaylistWithAI } from '../services/openaiService.js';

export const handleGeneratePlaylistWithAI = async (req, res) => {

    const { prompt } = req.body;

    try {
        const songs = await generatePlaylistWithAI(prompt);
        res.status(200).json({ songs });
    } catch (error) {
        console.error('Erro ao gerar playlist com IA:', error);
        res.status(500).json({ error: 'Erro ao gerar playlist com IA' });
    }
};
