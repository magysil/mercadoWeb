import express from 'express'

import { create } from 'express-handlebars';

//Creación de valriables de entorno
import {fileURLToPath} from 'url';
import {dirname} from 'path';

//Variables permiten mostrar el path donde estoy en el proyecto
const __filename = fileURLToPath(import.meta.url); 
const __dirname = dirname (__filename);

import vistaHomeRoutes from '../routes/vistaHome.routes.js'


class Server{    
    
    constructor(){
        this.app = express()
        this.port = process.env.PORT || 8000;

        this.frontEndPaths = {
            rootHome: '/'
           
        } 
        
        //Iniciamos nuestros metodos 
        this.middlewares();
        this.routes()
    }

    middlewares(){
        this.app.use (express.static('public'));
        this.app.use('/img', express.static( `${__dirname}/../public/assets/img`));
        this.app.use('/css', express.static( `${__dirname}/../public/assets/css`));        
        this.app.use('/bootstrap', express.static(`${__dirname}/../node_modules/bootstrap/dist`));
        this.app.use('/bootstrap-icons', express.static(`${__dirname}/../node_modules/bootstrap-icons`));
        this.app.use('/jquery', express.static(`${__dirname}/../node_modules/jquery/dist`))
    }

    routes(){
        this.app.use(this.frontEndPaths.rootHome, vistaHomeRoutes);
    }
    
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor Levantado en puerto ${this.port}`)
        })
    }

    initHandelbars(){
        this.hbs = create({
            partialsDir:[
                "views"
            ]
        })

        this.app.engine("handlebars", this.hbs.engine);
        this.app.set("view engine", "handlebars");
    }



}

export default Server;