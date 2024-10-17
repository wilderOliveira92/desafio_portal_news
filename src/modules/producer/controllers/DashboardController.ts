import { Request, Response } from "express";
import ProducerRepository from "../infra/typeorm/repositories/ProducerRepository";
import ListDashboardService from "../services/ListDashboardService";

class DasboardController {

    public producerRepository= new ProducerRepository();
  
    public  getDashboard = async (req: Request, res: Response): Promise<Response> => {
        console.log('getDashboard')
        const listDashboardService = new ListDashboardService(this.producerRepository);
        const dataDashboard = await listDashboardService.execute()        
        return res.status(200).json(dataDashboard);
    }

}

export default DasboardController;