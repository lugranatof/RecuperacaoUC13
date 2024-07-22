import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import livroRoutes from './src/routes/livroRoutes.js';
import leitorRoutes from './src/routes/leitorRoutes.js';

dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());

server.use(leitorRoutes);
server.use(livroRoutes);


server.listen(process.env.PORT);