import express from 'express'
import dotenv from 'dotenv'
import { MainRouter } from './routes/router.js'
import { Sequelize, DataTypes } from 'sequelize';



const app = express()
app.listen(4000, () => {
	console.log(`Server kører på port http://localhost:4000`);
})

app.use(MainRouter);