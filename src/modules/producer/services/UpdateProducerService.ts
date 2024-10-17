import AppError from "@shared/errors/appError";
import ICreateProducerDTO from "../dtos/ICreateProducerDTO";
import Producer from "../infra/typeorm/entities/Producer";
import ProducerRepository from "../infra/typeorm/repositories/ProducerRepository";
import FunctionsUtils from "@shared/utils/FunctionsUtils";


class UpdateProducerService {

    private producerRepository: ProducerRepository;
    constructor(producerRepository:ProducerRepository){
        this.producerRepository=producerRepository;
    }

    public async execute( id:number, {document, nameProducer, nameFarm, city, estate, agricuturalArea, totalArea, vegetationArea, crops}:ICreateProducerDTO ):Promise<Producer> {
        
        document = FunctionsUtils.removeMask(document);
        totalArea = Number(totalArea);
        agricuturalArea = Number(agricuturalArea);
        vegetationArea = Number(vegetationArea);

        const findProducer = await this.producerRepository.findById(id);
        if(!findProducer){
            throw new AppError("Producer not found.");
        }

        if(!FunctionsUtils.validateCpf(document) && !FunctionsUtils.validateCnpj(document)){
            throw new AppError("Document is invalid.");
        }        
        
        if(!this.validateArea(Number(totalArea), agricuturalArea, vegetationArea)){
            throw new AppError("Total area smaller than the sum of the vegetation and arable areas.");
        }

        const producer = await this.producerRepository.update(id, {document, nameProducer, nameFarm, city, estate, agricuturalArea, totalArea, vegetationArea, crops});
        return producer;

    }

    private validateArea(totalArea:number, agricuturalArea:number , vegetationArea:number):boolean {
        const sumAreas = agricuturalArea + vegetationArea;
        return totalArea >= sumAreas;
    }

}

export default UpdateProducerService;