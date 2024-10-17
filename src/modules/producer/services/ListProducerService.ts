
import Producer from "../infra/typeorm/entities/Producer";
import ProducerRepository from "../infra/typeorm/repositories/ProducerRepository";

class ListProducerService {

    private producerRepository: ProducerRepository;
    constructor(producerRepository:ProducerRepository){
        this.producerRepository=producerRepository;
    }

    public async execute( id:number ):Promise<Producer | null> {             
        return await this.producerRepository.findById(id);
    }


}

export default ListProducerService;