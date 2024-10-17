"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("@modules/producer/routes"));
const express_1 = require("express");
// import producerRouter from '@modules/producer/producer.routes';
const routes = (0, express_1.Router)();
routes.use('/producer', routes_1.default);
routes.get('/', (req, res) => {
    res.send('OK');
});
exports.default = routes;
