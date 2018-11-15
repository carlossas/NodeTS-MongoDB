"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//INSTANCIA DE CONEXION MONGO DB
const mongodb_1 = __importDefault(require("../mongodb/mongodb"));
//SCHEMA HEROE
const heroe_1 = __importDefault(require("../mongodb/models/heroe"));
const Heroe = express_1.Router();
//OBTIENE TODOS LOS HEROES
Heroe.get('/heroes_mongodb', (req, res) => {
    //RECIBO DESDE DONDE PAGINAR
    var desde = req.query.desde || 0;
    desde = Number(desde);
    //ESTA FUNCION DEVUELVE TODOS LOS DATOS PAGINADOS
    mongodb_1.default.obtenerTodos(heroe_1.default, desde, (err, datos, conteo) => {
        //SI EXISTE UN ERROR
        if (err) {
            res.status(400).json({
                error: true,
                mensaje: err
            });
        }
        else {
            res.json({
                error: false,
                datos: datos,
                total: conteo
            });
        }
    });
});
exports.default = Heroe;
