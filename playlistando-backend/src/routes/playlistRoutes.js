import express from 'express';
import { createPlaylist, getPlaylistHistory } from '../controllers/playlistController.js';

const router = express.Router();

router.post('/', createPlaylist);
router.get('/history/:userId', getPlaylistHistory);

export default router;