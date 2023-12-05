import express from "express";
import ArtistController from "../controllers/artist.controller.js";


const router = express.Router();
const controller = new ArtistController();


router.get('/', (req,res) => {
    res.send('Velkommen')
});


router.get('/artsists', (req, res) => {
    controller.list(req, res);
});

router.get('/artist/:id([0-9]*)', (req, res) => {
    controller.details(req, res);
});

router.post('/artist/create', (req, res) => {
    controller.create(req, res);
});

router.put('/artist/update', (req, res) => {
    controller.update(req, res);
});

router.delete('/artost/delete/:id([0-9]*)', (req, res) => {
    controller.remove(req, res);
});

export { router as ArtistRouter}

