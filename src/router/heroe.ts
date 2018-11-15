import { Router, Request, Response } from 'express';
//INSTANCIA DE CONEXION MONGO DB
import MongoDB from '../mongodb/mongodb';
//SCHEMA HEROE
import modeloHeroe from '../mongodb/models/heroe';

const Heroe = Router();

//OBTIENE TODOS LOS HEROES
Heroe.get( '/heroes_mongodb', (req: Request, res: Response) =>{

    //RECIBO DESDE DONDE PAGINAR
    var desde = req.query.desde || 0;
    desde = Number(desde);

    //ESTA FUNCION DEVUELVE TODOS LOS DATOS PAGINADOS
    MongoDB.obtenerTodos(modeloHeroe, desde, (err:any, datos: any, conteo:any)=>{

        //SI EXISTE UN ERROR
        if(err){
            res.status(400).json({
                error: true,
                mensaje: err
            });
        }else{
            res.json({
                error: false,
                datos: datos,
                total: conteo
            });
        }

    })
    
});


export default Heroe;
