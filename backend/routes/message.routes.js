import express from 'express';
import { sendMessage } from '../controllers/message.controller.js';
import protectRoute from '../middleware/ProtectRoute.js';

const router = express.Router();

router.post("/send/:id",protectRoute,sendMessage) //ProtectRoute is like a authorization only logged in user can send messages

export default router;