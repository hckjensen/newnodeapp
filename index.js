import express from 'express'
import dotenv from 'dotenv'
import { MainRouter } from './routes/main.router.js'
import { InstallRouter } from './routes/install.router.js';
import { SongRouter } from './routes/song.router.js';
import { ArtistRouter } from './routes/artist.router.js';
import { UserRouter } from './routes/user.router.js'
import { Sequelize, DataTypes } from 'sequelize';



const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(MainRouter, InstallRouter, SongRouter, ArtistRouter, UserRouter);

app.listen(process.env.PORT, () => {
	console.log(`Server kører på port http://localhost:${process.env.PORT}`);
})



