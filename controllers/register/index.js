import express from 'express';

import { create } from './register.controller.js'
const router = express.Router();

router.post('/usermasters', create);

export default router; 

