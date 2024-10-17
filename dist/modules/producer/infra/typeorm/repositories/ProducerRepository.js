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
const Producer_1 = __importDefault(require("../entities/Producer"));
const database_1 = require("@config/database");
const appError_1 = __importDefault(require("@shared/errors/appError"));
class ProducerRepository {
    constructor() {
        this.ormRepository = database_1.AppDataSource.getRepository(Producer_1.default);
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const producer = this.ormRepository.create(data);
            return yield this.ormRepository.save(producer);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const producer = yield this.ormRepository.findOne({ where: { id } });
            if (!producer) {
                throw new appError_1.default("The producer was not found");
            }
            const { document, nameProducer, nameFarm, city, estate, agricuturalArea, totalArea, vegetationArea, cropsPlanted } = data;
            producer.document = document || producer.document;
            producer.nameProducer = nameProducer || producer.nameProducer;
            producer.nameFarm = nameFarm || producer.nameFarm;
            producer.city = city || producer.city;
            producer.estate = estate || producer.estate;
            producer.agricuturalArea = agricuturalArea || producer.agricuturalArea;
            producer.totalArea = totalArea || producer.totalArea;
            producer.vegetationArea = vegetationArea || producer.vegetationArea;
            producer.cropsPlanted = cropsPlanted || producer.cropsPlanted;
            yield this.ormRepository.update(id, producer);
            return producer;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.ormRepository.find();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.ormRepository.findOne({ where: { id } });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ormRepository.delete(id);
        });
    }
    findByDocument(document) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.ormRepository.findOne({ where: { document } });
        });
    }
}
exports.default = ProducerRepository;
