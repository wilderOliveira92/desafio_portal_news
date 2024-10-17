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
const typeorm_1 = require("typeorm");
const appError_1 = __importDefault(require("@shared/errors/appError"));
const News_1 = __importDefault(require("../schemas/News"));
class NewsRepository {
    constructor() {
        this.ormRepository = (0, typeorm_1.getMongoRepository)(News_1.default);
    }
    create(_a) {
        return __awaiter(this, arguments, void 0, function* ({ user_id, title, publication, content, }) {
            const news = this.ormRepository.create({
                user_id,
                title,
                content,
                publication,
            });
            yield this.ormRepository.save(news);
            return news;
        });
    }
    update(id_1, _a) {
        return __awaiter(this, arguments, void 0, function* (id, { title, content, publication }) {
            const news = yield this.ormRepository.findOne(id);
            if (!news) {
                throw new appError_1.default("The news was not found");
            }
            news.content = content || news.content;
            news.title = title || news.title;
            news.publication = publication || news.publication;
            yield this.ormRepository.update(id, news);
            return news;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ormRepository.delete(id);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const news = yield this.ormRepository.find();
            return news;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const news = yield this.ormRepository.findOne(id);
            return news;
        });
    }
    findByTitle(title) {
        return __awaiter(this, void 0, void 0, function* () {
            const news = yield this.ormRepository.findOne({
                where: {
                    title,
                },
            });
            return news;
        });
    }
}
exports.default = NewsRepository;
