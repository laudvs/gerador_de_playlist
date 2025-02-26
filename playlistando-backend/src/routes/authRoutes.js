import express from 'express';
import { handleSpotifyLogin, getSpotifyAccessToken } from '../controllers/authController.js';

const router = express.Router();

router.get('/login', handleSpotifyLogin);
router.get('/callback', getSpotifyAccessToken);

export default router;