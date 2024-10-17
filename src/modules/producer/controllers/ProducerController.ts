import { Request, Response } from "express";
import ProducerRepository from "../infra/typeorm/repositories/ProducerRepository";
import CreateProducerService from "../services/CreateProducerService";
import ListProducerService from "../services/ListProducerService";
import UpdateProducerService from "../services/UpdateProducerService";
import DeleteProducerService from "../services/DeleteProducerService";

class ProducerController {

    public producerRepository= new ProducerRepository();
    
    public create = async (req: Request, res: Response): Promise<Response> => {

        const { document, nameProducer, nameFarm, city, estate, agricuturalArea, totalArea, vegetationArea, crops } = req.body;

        const createUserService = new CreateProducerService(this.producerRepository);
        const producer = await createUserService.execute({document, nameProducer, nameFarm, city, estate, agricuturalArea, totalArea, vegetationArea, crops})
        return res.status(201).json(producer);
    }

    public  getAll = async (req: Request, res: Response): Promise<Response> => {
        const listProducers = await this.producerRepository.findAll();
        console.log(listProducers)
        return res.status(200).json(listProducers);
    }

    public  getById = async (req: Request, res: Response): Promise<Response> => {

        console.log('getById')

        const {id} = req.params

        const listProducerService = new ListProducerService(this.producerRepository);
        const producer = await listProducerService.execute(Number(id));
        console.log(producer)
        return res.status(200).json(producer);
    }
    public  update = async (req: Request, res: Response): Promise<Response> => {

        const {id} = req.params
        const { document, nameProducer, nameFarm, city, estate, agricuturalArea, totalArea, vegetationArea, crops } = req.body;
        
        const updateProducerService = new UpdateProducerService(this.producerRepository);
        const producer = await updateProducerService.execute(Number(id),{document, nameProducer, nameFarm, city, estate, agricuturalArea, totalArea, vegetationArea, crops});
        return res.status(200).json(producer);
    }

    public  delete = async (req: Request, res: Response): Promise<Response> => {
        const {id} = req.params
        
        const deleteProducerService = new DeleteProducerService(this.producerRepository);
        await deleteProducerService.execute(Number(id))        
        return res.status(200).send();
    }




}

export default ProducerController;