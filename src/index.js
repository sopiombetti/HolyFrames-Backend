import express from 'express';
import cors from 'cors'
import postersRoutes from './routes/posters.routes.js';
import db from './db.js'
import dotenv from 'dotenv'
dotenv.config({path: '.env'})

const app = express()

// Permitir solicitudes desde 'http://localhost:5173'
app.use(cors({
    origin: 'http://localhost:5173'
  }));

app.use(express.json())

try{
    await db.authenticate();
    console.log('Conection to DB')
    db.sync()
}catch(error){
    console.log(error)
}

app.use(postersRoutes)

app.listen(process.env.PORT)
console.log('Server running on port ',process.env.PORT)