"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const celebrate_1 = require("celebrate");
const cors_1 = __importDefault(require("cors"));
require("express-async-errors");
const routes_1 = __importDefault(require("@shared/infra/http/routes"));
const appError_1 = __importDefault(require("@shared/errors/appError"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.default);
app.use((0, celebrate_1.errors)());
//@ts-ignore
app.use((err, request, response, _) => {
    if (err instanceof appError_1.default) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }
    console.error(err);
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
});
exports.default = app;
// app.listen(3333, () => {
//   console.log('Server started on port 3333!');
// });
