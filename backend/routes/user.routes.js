import express from 'express';
import protectRoute from '../middleware/ProtectRoute.js';
import { getUserOnSidebar } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/',protectRoute,getUserOnSidebar);

export default router;