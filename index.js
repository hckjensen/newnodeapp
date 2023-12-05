import express from 'express'
import dotenv from 'dotenv'
import { MainRouter } from './routes/router.js'
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
const User = sequelize.define('User', {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
});

const app = express()
app.listen(4000, () => {
	console.log(`Server kører på port http://localhost:4000`);
})

app.use(MainRouter);