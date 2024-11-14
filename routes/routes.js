import express from 'express';
import registerController from '../controllers/register/index.js';

const router = express.Router();

// Use the register controller for the /api route
router.use('/api', registerController);

export default router;
