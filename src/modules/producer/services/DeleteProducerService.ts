import AppError from "@shared/errors/appError";
import ICreateProducerDTO from "../dtos/ICreateProducerDTO";
import Producer from "../infra/typeorm/entities/Producer";
import ProducerRepository from "../infra/typeorm/repositories/ProducerRepository";
import FunctionsUtils from "@shared/utils/FunctionsUtils";

class DeleteProducerService {

    private producerRepository: ProducerRepository;
    constructor(producerRepository:ProducerRepository){
        this.producerRepository=producerRepository;
    }

    public async execute( id:number):Promise<void> {
        
        const findProducer = await this.producerRepository.findById(id);
        if(!findProducer){
            throw new AppError("Producer not found.");
        }

        await this.producerRepository.delete(id);

    }

}

export default DeleteProducerService;