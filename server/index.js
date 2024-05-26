import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

/* CONFIGURATIONS */
dotenv.config()
const app = express()
app.use( express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin:"}))
app.use(morgar("common"))
app.use(bodyParter.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

console.log('hello')

/* Mongoose setup*/
/* banco de dados */