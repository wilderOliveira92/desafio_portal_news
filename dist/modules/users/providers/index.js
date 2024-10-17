"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const BCryptHshProvider_1 = __importDefault(require("./HashProvider/implementations/BCryptHshProvider"));
tsyringe_1.container.registerSingleton('HashProvider', BCryptHshProvider_1.default);
