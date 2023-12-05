import express from "express";
import Song from '../Models/song.model.js'
import SongController from "../controllers/song.controller.js";


const router = express.Router();
const controller = new SongController();


router.get('/', (req,res) => {
    res.send('Velkommen')
});


router.get('/songlist', (req, res) => {
    controller.list(req, res);
});

router.get('/song/:id([0-9]*)', (req, res) => {
    controller.details(req, res);
});

router.post('/song/create', (req, res) => {
    controller.create(req, res);
});

router.put('/song/update', (req, res) => {
    controller.update(req, res);
});

router.delete('/song/delete/:id([0-9]*)', (req, res) => {
    controller.remove(req, res);
});

export { router as SongRouter}

