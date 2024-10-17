
import IDashboardDTO from "../dtos/IDashboardDTO";
import ProducerRepository from "../infra/typeorm/repositories/ProducerRepository";

class ListDashboardService {

    private producerRepository: ProducerRepository;
    constructor(producerRepository:ProducerRepository){
        this.producerRepository=producerRepository;
    }

    public async execute( ):Promise<IDashboardDTO | null> {             
        
        const dashboard = {} as IDashboardDTO ;

        const producers = await this.producerRepository.findAll();
        if(producers){
            dashboard.totalFarm = producers.length;
            dashboard.totalHectares = producers.reduce((sum, producer) => sum + producer.totalArea , 0);
            dashboard.producers = producers;
        }

        return dashboard;
    }


}

export default ListDashboardService;