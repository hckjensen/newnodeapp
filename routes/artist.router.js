import express from "express";
import Artist from '../Models/artist.model.js'


const router = express.Router();

router.get('/artists', (req,res) => {
    res.send('Velkommen')
});



export { router as ArtistRouter}

