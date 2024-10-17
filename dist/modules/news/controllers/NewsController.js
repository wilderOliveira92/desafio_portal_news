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
const tsyringe_1 = require("tsyringe");
const CreateNewsService_1 = __importDefault(require("../services/CreateNewsService"));
const ShowNewsService_1 = __importDefault(require("../services/ShowNewsService"));
const ShowAllNewsService_1 = __importDefault(require("../services/ShowAllNewsService"));
const DeleteNewsService_1 = __importDefault(require("../services/DeleteNewsService"));
const UpdateNewsService_1 = __importDefault(require("../services/UpdateNewsService"));
class NewsController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const showAllNews = tsyringe_1.container.resolve(ShowAllNewsService_1.default);
            const news = yield showAllNews.execute();
            return response.json(news);
        });
    }
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, content, publication } = request.body;
            const user_id = request.user.id;
            console.log(user_id);
            const createNews = tsyringe_1.container.resolve(CreateNewsService_1.default);
            const news = yield createNews.execute({
                user_id,
                title,
                publication,
                content,
            });
            return response.json(news);
        });
    }
    show(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const showNews = tsyringe_1.container.resolve(ShowNewsService_1.default);
            const news = yield showNews.execute({ id });
            return response.json(news);
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const deleteNews = tsyringe_1.container.resolve(DeleteNewsService_1.default);
            yield deleteNews.execute({ id });
            return response.status(200).json("The news has been deleted.");
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const { title, content, publication } = request.body;
            const updateNews = tsyringe_1.container.resolve(UpdateNewsService_1.default);
            const news = yield updateNews.execute(id, { title, content, publication });
            return response.json(news);
        });
    }
}
exports.default = NewsController;
