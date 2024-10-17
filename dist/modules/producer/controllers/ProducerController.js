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
const ProducerRepository_1 = __importDefault(require("../infra/typeorm/repositories/ProducerRepository"));
const CreateProducerService_1 = __importDefault(require("../services/CreateProducerService"));
const ListProducerService_1 = __importDefault(require("../services/ListProducerService"));
const UpdateProducerService_1 = __importDefault(require("../services/UpdateProducerService"));
const DeleteProducerService_1 = __importDefault(require("../services/DeleteProducerService"));
class ProducerController {
    constructor() {
        this.producerRepository = new ProducerRepository_1.default();
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { document, nameProducer, nameFarm, city, estate, agricuturalArea, totalArea, vegetationArea, cropsPlanted } = req.body;
            const createUserService = new CreateProducerService_1.default(this.producerRepository);
            const producer = yield createUserService.execute({ document, nameProducer, nameFarm, city, estate, agricuturalArea, totalArea, vegetationArea, cropsPlanted });
            return res.status(201).json(producer);
        });
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const listProducers = yield this.producerRepository.findAll();
            console.log(listProducers);
            return res.status(200).json(listProducers);
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const listProducerService = new ListProducerService_1.default(this.producerRepository);
            const producer = yield listProducerService.execute(Number(id));
            console.log(producer);
            return res.status(200).json(producer);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { document, nameProducer, nameFarm, city, estate, agricuturalArea, totalArea, vegetationArea, cropsPlanted } = req.body;
            const updateProducerService = new UpdateProducerService_1.default(this.producerRepository);
            const producer = yield updateProducerService.execute(Number(id), { document, nameProducer, nameFarm, city, estate, agricuturalArea, totalArea, vegetationArea, cropsPlanted });
            return res.status(200).json(producer);
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deleteProducerService = new DeleteProducerService_1.default(this.producerRepository);
            yield deleteProducerService.execute(Number(id));
            return res.status(200).send();
        });
    }
}
exports.default = ProducerController;
