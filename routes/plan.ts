import {Router} from 'express';
import { deletePlan, getPlan, getPlanes, postPlan, putPlan } from '../controllers/plan';



const router = Router();


router.get('/', getPlanes);
router.get('/:id', getPlan);
router.post('/', postPlan);
router.put('/:id', putPlan);
router.delete('/:id', deletePlan);



export default router;