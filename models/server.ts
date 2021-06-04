import express,{Application}from "express";
import userRoutes from "../routes/usuarios";
import planRoutes from "../routes/plan";
import cors from 'cors'
import db from "../database/connection";
class Server {

    private app: Application;
    private port: string;
    private apiPaths ={
        usuarios: "/api/usuarios",
        planes: "/api/planes"
    }

    constructor (){
        this.app = express();
        this.port = process.env.PORT || '8000';



        this.dbConnection();
        this.middleware();

        this.routes();
    }

    async dbConnection() {
        
        try {

            await db.authenticate();
            console.log('online');

        } catch (error){
            throw new Error(error);
            
        }
    }





    middleware() {

        this.app.use( cors());

        this.app.use(express.json());
        
        this.app.use(express.static('public'));



    }





    routes() {
        this.app.use(this.apiPaths.usuarios,userRoutes);
        this.app.use(this.apiPaths.planes,planRoutes);
    }

    listen(){
        this.app.listen(this.port,()=>{console.log('Servidor corriendo en puerto! ' + this.port);
    })
    }


}

export default Server;