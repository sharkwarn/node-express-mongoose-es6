
import express from 'express';

import register from './../controller/register';

import login from './../controller/login'

const router = express.Router();

router.post('/register',register.send);
router.post('/login',login.checkUser);

export default router;
