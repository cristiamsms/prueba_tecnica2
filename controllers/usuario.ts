import { Request, Response } from "express";
import generarJWT from "../helpers/jwt";
import Usuario from "../models/usuario";




export const getUsuario = (req:Request, res:Response) => {
    const {id} = req.params;

    res.json({
        msg: "getUsuario",
        id
    })




}


export const postUsuario = async(req:Request, res:Response) => {
   
    const {email,password} = req.body;
    

    if(!(email && password)){
       return res.status(400).json({message: "email y password requeridos"})
    }
 
 
   try {

       const usuario:any = await Usuario.findOne({where: {email}});
       if(!usuario)
       {

        return res.status(400).json({
            ok:false,
            msg:'Un usuario existe con ese correo'
        })
       }
       if(password !== usuario.password)
       {
            return res.status(400).json({
                ok:false,
                msg:'Password incorrecto'
            });

       }

       const token = await generarJWT(usuario.id,usuario.nombre);
       
       res.json({
           ok:true,
           uid:usuario.id,
           name:usuario.nombre,
           token

       })
       
     } 
        catch (error) {
            console.log(error);
        res.status(500).json({
        ok:false,
        msg:'Por favor hable con el administrador'
         });
        }   
       
   }




export const renewUsuario = (req:Request, res:Response) =>
{
    
    res.json({
        ok:true,
        msg: "renew Usuario",
        
   
        
    })

}
