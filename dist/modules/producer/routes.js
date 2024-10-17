"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProducerController_1 = __importDefault(require("./controllers/ProducerController"));
const celebrate_1 = require("celebrate");
const producerRouter = (0, express_1.Router)();
const producerController = new ProducerController_1.default();
producerRouter.post('/', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        document: celebrate_1.Joi.string().required(),
        nameProducer: celebrate_1.Joi.string().required(),
        nameFarm: celebrate_1.Joi.string().required(),
        city: celebrate_1.Joi.string().required(),
        estate: celebrate_1.Joi.string().required(),
        agricuturalArea: celebrate_1.Joi.number().required(),
        totalArea: celebrate_1.Joi.number().required(),
        vegetationArea: celebrate_1.Joi.number().required(),
        crops: celebrate_1.Joi.array().items(celebrate_1.Joi.object().keys({
            description: celebrate_1.Joi.string().required().min(2),
        }))
    }
}), 
//@ts-ignore
producerController.create);
//@ts-ignore
producerRouter.get('/list', producerController.getAll);
//@ts-ignore
producerRouter.get('/:id', producerController.getById);
producerRouter.put('/:id', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        document: celebrate_1.Joi.string().required(),
        nameProducer: celebrate_1.Joi.string().required(),
        nameFarm: celebrate_1.Joi.string().required(),
        city: celebrate_1.Joi.string().required(),
        estate: celebrate_1.Joi.string().required(),
        agricuturalArea: celebrate_1.Joi.number().required(),
        totalArea: celebrate_1.Joi.number().required(),
        vegetationArea: celebrate_1.Joi.number().required(),
        crops: celebrate_1.Joi.array().items(celebrate_1.Joi.object().keys({
            description: celebrate_1.Joi.string().required().min(2),
        }))
    }
}), 
//@ts-ignore
producerController.update);
//@ts-ignore
producerRouter.delete('/:id', producerController.delete);
exports.default = producerRouter;
