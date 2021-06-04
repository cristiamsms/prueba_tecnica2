import { Request, Response } from "express";
import Plan from "../models/plan";





export const getPlanes = async(req:Request, res:Response) => {

    const planes = await Plan.findAll();
    
    
    res.json({planes});




}
export const getPlan = async(req: Request, res: Response) =>      {
    const {id} = req.params;
    const planes =await Plan.findByPk(id);


    if(planes){

        res.json({
        planes,
            id
        })
    } else {
        res.status(404).json({
            msg: 'No existe este plan'
        })
    }




}
export const postPlan = async( req: Request , res: Response ) => {

    const {body} = req;
                   

    try {   
        
        if(!body.titulo)
        {
            return res.status(400).json({msg: 'falta un titulo'});
        } else {

            if(!body.valor)
            {
                return res.status(400).json({msg: 'falta un valor'});
            }

        }


        const plan =  Plan.build(body);
        
        await plan.save();
        res.json(plan); 


        
    } catch (error) {
      
        res.status(500).json({msg: 'hable con el administrador'});
    }


}
export const putPlan = async(req:Request, res:Response) => {

    const {id} = req.params;
    const {body} = req;

    try {
        const plan = await Plan.findByPk(id);
        if(!plan){
            return res.status(404).json({msg:'No existe este plan'})
        }

        await plan.update(body);

        res.json(plan);

    } catch (error) {

        res.status(500).json({
            msg: 'hable con el administrador'});
        
    }

    




}
export const deletePlan = async(req:Request, res:Response) => {

    const {id} = req.params;
 
    
        const plan = await Plan.findByPk(id);

        if(!plan) {
            return res.status(404).json({msg:'No existe este plan'})
        }
        await plan.update({ estado: false });
        res.json(plan);

 



}