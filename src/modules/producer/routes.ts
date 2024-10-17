import { Router } from "express";
import ProducerController from "./controllers/ProducerController";
import { celebrate, Joi, Segments } from "celebrate";
import DasboardController from "./controllers/DashboardController";



const producerRouter = Router();
const producerController = new ProducerController();
const dashboardController = new DasboardController();


producerRouter.post('/', 
    celebrate({
        [Segments.BODY]:{
            document: Joi.string().required(),
            nameProducer:Joi.string().required(), 
            nameFarm:Joi.string().required(), 
            city:Joi.string().required(), 
            estate:Joi.string().required(), 
            agricuturalArea:Joi.number().required(), 
            totalArea:Joi.number().required(), 
            vegetationArea:Joi.number().required(), 
            crops: Joi.array().items(
                Joi.object().keys({
                    description: Joi.string().required().min(2),                    
                  })
            )
        }
    }),
    //@ts-ignore
    producerController.create);
//@ts-ignore
producerRouter.get('/list', producerController.getAll);
//@ts-ignore
producerRouter.get('/dashboard', dashboardController.getDashboard);
//@ts-ignore
producerRouter.get('/:id', producerController.getById);

producerRouter.put('/:id', 
    celebrate({
        [Segments.BODY]:{
            document: Joi.string().required(),
            nameProducer:Joi.string().required(), 
            nameFarm:Joi.string().required(), 
            city:Joi.string().required(), 
            estate:Joi.string().required(), 
            agricuturalArea:Joi.number().required(), 
            totalArea:Joi.number().required(), 
            vegetationArea:Joi.number().required(), 
            crops: Joi.array().items(
                Joi.object().keys({
                    description: Joi.string().required().min(2),                    
                  })
            )
        }
    }),
    //@ts-ignore
    producerController.update);
//@ts-ignore
producerRouter.delete('/:id', producerController.delete);


export default producerRouter