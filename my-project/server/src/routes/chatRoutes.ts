import { postChat } from "../controllers/chatController";
import { Router } from 'express';

const router = Router();

router.post('/chat', postChat);

export default router;
