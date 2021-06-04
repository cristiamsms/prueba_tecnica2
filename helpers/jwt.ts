import jwt from 'jsonwebtoken';


const generarJWT = (uid:number, name:string) =>{

    return new Promise((resolve, reject) =>{
        
        const payload ={uid,name};
        jwt.sign(payload,'F-I-L-O-F-O-F-I-T-O44921462',{
            expiresIn:'5h'

        },(err,token)=>{
            if(err) {
                console.log(err)
                reject('No se genero el token');
            }
            resolve(token);
        })
    })

}


export default generarJWT;