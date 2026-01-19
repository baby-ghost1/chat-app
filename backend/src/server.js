import dotenv from 'dotenv';
dotenv.config();

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js'
import express from 'express'
import cookieParser from 'cookie-parser'
import path from 'path';
import { connectDB } from './lib/db.js';

const app = express();
const __dirname = path.resolve();

app.use(express.json());    // req.body
app.use(cookieParser());

app.use('/api/auth', authRoutes)

app.use('/api/message', messageRoutes)

// make ready for deployment
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/dist')))

    app.get('*', (_, res) => {
        res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
    })
}


const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Server is listening on port: http://localhost:${port}`);
    connectDB();
})

