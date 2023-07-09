import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';


const port = process.env.PORT || 5000;

connectDB(); // connect to mongodb

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));