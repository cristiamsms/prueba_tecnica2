import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

const validarJWT = (req:Request,res:Response,next:any) =>

{
    const token = req.header('x-token');
    
    if(!token){
        return res.status(401).json({
            ok:false,
             msg:'No hay token en la peticion'
        });
    }

    try {

        const payload = jwt.verify(
            token,
            'F-I-L-O-F-O-F-I-T-O44921462'
        );
        
       
        
    } catch (error) {
        res.status(401).json({
            ok: false,
            msg: 'Token no Valido'
        });
    }


    next();

}

export default validarJWT;