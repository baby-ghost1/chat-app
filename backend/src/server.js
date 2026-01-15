import dotenv from 'dotenv';
dotenv.config();

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js'
import express from 'express'
const app = express();


app.use('/api/auth', authRoutes)

app.use('/api/message', messageRoutes)





const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Server is listening on port: http://localhost:${port}`);
})

