import express from "express";
import Song from '../Models/song.model.js'


const router = express.Router();

router.get('/songs', (req,res) => {
    res.send('Velkommen')
});



export { router as SongRouter}

