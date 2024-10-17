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
const appError_1 = __importDefault(require("@shared/errors/appError"));
const FunctionsUtils_1 = __importDefault(require("@shared/utils/FunctionsUtils"));
class UpdateProducerService {
    constructor(producerRepository) {
        this.producerRepository = producerRepository;
    }
    execute(id_1, _a) {
        return __awaiter(this, arguments, void 0, function* (id, { document, nameProducer, nameFarm, city, estate, agricuturalArea, totalArea, vegetationArea, cropsPlanted }) {
            document = FunctionsUtils_1.default.removeMask(document);
            totalArea = Number(totalArea);
            agricuturalArea = Number(agricuturalArea);
            vegetationArea = Number(vegetationArea);
            const findProducer = yield this.producerRepository.findById(id);
            if (!findProducer) {
                throw new appError_1.default("Producer not found.");
            }
            if (!FunctionsUtils_1.default.validateCpf(document) && !FunctionsUtils_1.default.validateCnpj(document)) {
                throw new appError_1.default("Document is invalid.");
            }
            if (!this.validateArea(Number(totalArea), agricuturalArea, vegetationArea)) {
                throw new appError_1.default("Total area smaller than the sum of the vegetation and arable areas.");
            }
            //Cada produtor pode plantar mais de uma cultura em sua Fazenda.
            const producer = yield this.producerRepository.update(id, { document, nameProducer, nameFarm, city, estate, agricuturalArea, totalArea, vegetationArea, cropsPlanted });
            return producer;
        });
    }
    validateArea(totalArea, agricuturalArea, vegetationArea) {
        const sumAreas = agricuturalArea + vegetationArea;
        return totalArea >= sumAreas;
    }
}
exports.default = UpdateProducerService;
