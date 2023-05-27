import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routerList from './routers/routerList.routes.js';
dotenv.config();

const app = express();

app.use(express.json())
app.use(cors())
app.use(routerList);

const PORT = process.env.PORT;
app.listen(PORT, ()=> console.log(`The server is running on port ${PORT}`));