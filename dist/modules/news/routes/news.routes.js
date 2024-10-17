"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const celebrate_1 = require("celebrate");
const ensureAuthenticated_1 = __importDefault(require("@modules/users/infra/http/middlewares/ensureAuthenticated"));
const NewsController_1 = __importDefault(require("../controllers/NewsController"));
const newsRouter = (0, express_1.Router)();
const newsController = new NewsController_1.default();
newsRouter.use(ensureAuthenticated_1.default);
newsRouter.post("/", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        title: celebrate_1.Joi.string().required(),
        content: celebrate_1.Joi.string().required(),
        publication: celebrate_1.Joi.date().required(),
    },
}), newsController.create);
newsRouter.get("/:id", newsController.show);
newsRouter.get("/", newsController.index);
newsRouter.delete("/:id", newsController.delete);
newsRouter.patch("/:id", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        title: celebrate_1.Joi.string(),
        content: celebrate_1.Joi.string(),
        publication: celebrate_1.Joi.date(),
    },
}), newsController.update);
exports.default = newsRouter;
