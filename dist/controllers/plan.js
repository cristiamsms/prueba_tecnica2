"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePlan = exports.putPlan = exports.postPlan = exports.getPlan = exports.getPlanes = void 0;
const plan_1 = __importDefault(require("../models/plan"));
const getPlanes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const planes = yield plan_1.default.findAll();
    res.json({ planes });
});
exports.getPlanes = getPlanes;
const getPlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const planes = yield plan_1.default.findByPk(id);
    if (planes) {
        res.json({
            planes,
            id
        });
    }
    else {
        res.status(404).json({
            msg: 'No existe este plan'
        });
    }
});
exports.getPlan = getPlan;
const postPlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        if (!body.titulo) {
            return res.status(400).json({ msg: 'falta un titulo' });
        }
        else {
            if (!body.valor) {
                return res.status(400).json({ msg: 'falta un valor' });
            }
        }
        const plan = plan_1.default.build(body);
        yield plan.save();
        res.json(plan);
    }
    catch (error) {
        res.status(500).json({ msg: 'hable con el administrador' });
    }
});
exports.postPlan = postPlan;
const putPlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const plan = yield plan_1.default.findByPk(id);
        if (!plan) {
            return res.status(404).json({ msg: 'No existe este plan' });
        }
        yield plan.update(body);
        res.json(plan);
    }
    catch (error) {
        res.status(500).json({
            msg: 'hable con el administrador'
        });
    }
});
exports.putPlan = putPlan;
const deletePlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const plan = yield plan_1.default.findByPk(id);
    if (!plan) {
        return res.status(404).json({ msg: 'No existe este plan' });
    }
    yield plan.update({ estado: false });
    res.json(plan);
});
exports.deletePlan = deletePlan;
//# sourceMappingURL=plan.js.map