"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const plan_1 = require("../controllers/plan");
const router = express_1.Router();
router.get('/', plan_1.getPlanes);
router.get('/:id', plan_1.getPlan);
router.post('/', plan_1.postPlan);
router.put('/:id', plan_1.putPlan);
router.delete('/:id', plan_1.deletePlan);
exports.default = router;
//# sourceMappingURL=plan.js.map