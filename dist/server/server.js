"use strict";
//CLASE PARA INICIAR UN SERVIDOR EXPRESS EN UN PUERTO ESPECIFICO
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
class Server {
    constructor(puerto) {
        //INICIALIZAMOS EL PUERTO Y EL SERVIDOR EXPRESS
        this.port = puerto;
        this.app = express();
    }
    static init(puerto) {
        return new Server(puerto);
    }
    //FUNCION PARA ACCEDER AL FOLDER PUBLIC
    publicFolder() {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    }
    start(callback) {
        this.app.listen(this.port, callback);
        this.publicFolder();
    }
}
exports.default = Server;
