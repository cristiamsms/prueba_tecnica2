import {Router} from 'express';
import { postUsuario, renewUsuario } from '../controllers/usuario';
import validarJWT from '../middlewares/validar-jwt';


const router = Router();



router.post('/', postUsuario);

router.get('/renew',validarJWT,renewUsuario);





export default router;