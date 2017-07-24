import express from 'express';
import upload from './../controller/upload';


const router = express.Router();

router.post('/saveFile',upload.saveFile);

export default router;