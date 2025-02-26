import express from 'express';
import { handleGeneratePlaylistWithAI } from '../controllers/aiController.js';


const router = express.Router();

router.post('/generate', handleGeneratePlaylistWithAI);


export default router;
