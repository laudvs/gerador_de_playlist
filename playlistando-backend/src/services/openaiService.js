import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const OPENAI_API_URL = 'https://api.openai.com/v1';

export const generatePlaylistWithAI = async (prompt) => {
    try {
        const response = await axios.post(
            `${OPENAI_API_URL}/chat/completions`,
            {
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: `Crie uma playlist com 10 músicas baseada nisso: ${prompt}. Formato: Artista - Música` }],
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                },
            }
        );
        return response.data.choices[0].message.content.split('\n').filter((song) => song.trim());
    } catch (error) {
        console.error('Erro ao gerar playlist com IA:', error);
        throw error;
    }
};