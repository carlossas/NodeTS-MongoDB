import { Router, Request, Response } from 'express';
//INSTANCIA DE CONEXION MONGO DB
import MongoDB from '../mongodb/mongodb';
//SCHEMA HEROE
import Heroe from '../mongodb/models/heroe';

//CREAMOS LA CONEXION A MONGODB
MongoDB.instance;

const _mongodb = Router();

//OBTIENE TODOS LOS HEROES
_mongodb.get( '/heroes_mongodb', (req: Request, res: Response) =>{

    //RECIBO DESDE DONDE PAGINAR
    var desde = req.query.desde || 0;
    desde = Number(desde);

    //ESTA FUNCION DEVUELVE TODOS LOS DATOS PAGINADOS
    MongoDB.obtenerTodos(Heroe, desde, (err:any, datos: any)=>{

        //SI EXISTE UN ERROR
        if(err){
            res.status(400).json({
                error: true,
                mensaje: err
            });
        }else{
            res.json({
                error: false,
                datos
            });
        }

    })
    
});


export default _mongodb;
