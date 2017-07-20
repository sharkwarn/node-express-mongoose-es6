
import express from 'express';

import controller from './../controller/register'

const router = express.Router();

router.post('/register',controller.send);

export default router;
