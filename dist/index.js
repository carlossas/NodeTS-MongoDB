"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//IMPRACION DEL SERVER EXPRESS
const server_1 = __importDefault(require("./server/server"));
//IMPORTACIONES DE RUTAS
const heroe_1 = __importDefault(require("./router/heroe"));
/*
=======================================================================
<!-- Inicializar variables  -->
=======================================================================
*/
//BODYPARSE
var bodyParser = require('body-parser');
//INICIAMOS EL SERVER EN EL PUERTO 3000
const server = server_1.default.init(3000);
/*
=======================================================================
<!-- Fin de inicio de variables  -->
=======================================================================
*/
/*
=======================================================================
<!-- Inicio rutas del servidor  -->
=======================================================================
*/
//---------/MongoDB rutas API
server.app.use(heroe_1.default);
/*
=======================================================================
<!-- Fin de rutas del servidor  -->
=======================================================================
*/
/*
=======================================================================
<!-- Inicia el parseo el form-urlencoded  -->
=======================================================================
*/
server.app.use(bodyParser.urlencoded({ extended: false }));
server.app.use(bodyParser.json());
/*
=======================================================================
<!-- Fin del parseo form-urlencoded  -->
=======================================================================
*/
/*
=======================================================================
<!-- Inicio del lanzamiento servidor  -->
=======================================================================
*/
server.start(() => {
    console.log("Servidor corriendo en el puerto 3000");
});
/*
=======================================================================
<!-- Fin del lanzamiento servidor  -->
=======================================================================
*/
