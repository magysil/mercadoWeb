import Server from './models/Server.js';

import dotenv from 'dotenv'


//Esto es para que funcione la ruta hacia el .env
dotenv.config();

//Instancias el Server
const server = new Server()
server.initHandelbars();
server.listen();
