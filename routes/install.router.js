import express from 'express'
import sequelize from "../config/db.sequelize.js";
import Song from '../Models/song.model.js'
import Artist from '../Models/artist.model.js'
import User from '../Models/user.model.js'


const router = express.Router();

router.get('/install', async (req, res) => {
	try {
		await sequelize.sync()
		res.sendStatus(200)
	}
	catch(err) {
		res.send(err)
	}
})





export { router as InstallRouter }
