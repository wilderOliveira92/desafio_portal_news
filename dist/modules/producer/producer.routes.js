"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProducerController_1 = __importDefault(require("./controllers/ProducerController"));
const producerRouter = (0, express_1.Router)();
const producerController = new ProducerController_1.default();
producerRouter.post('/', producerController.create);
exports.default = producerRouter;
