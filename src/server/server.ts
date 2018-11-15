//CLASE PARA INICIAR UN SERVIDOR EXPRESS EN UN PUERTO ESPECIFICO

import express = require('express');
import path = require('path');

export default class Server{

    public app: express.Application;
    public port: number;

    constructor(
        puerto: number
    ){  
        //INICIALIZAMOS EL PUERTO Y EL SERVIDOR EXPRESS
        this.port = puerto;
        this.app = express();
    }
    
    static init (puerto:number){
        return new Server ( puerto );
    }

    //FUNCION PARA ACCEDER AL FOLDER PUBLIC
    private publicFolder(){
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use( express.static(publicPath) );
    }

    start( callback: Function ){
        this.app.listen(this.port, callback);
        this.publicFolder();
    }

}