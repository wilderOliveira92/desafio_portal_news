import ICreateProducerDTO from "@modules/producer/dtos/ICreateProducerDTO";
import IUpdateProducerDTO from "@modules/producer/dtos/IUpdateProducerDTO";
import IProducerRepository from "@modules/producer/repositories/IProducerRepository";
import Producer from "../entities/Producer";
import { Repository } from "typeorm";
import { AppDataSource } from "@config/database/database";
import AppError from "@shared/errors/appError";
import Crop from "../entities/Crop";

export default class ProducerRepository implements IProducerRepository {

    private ormRepository: Repository<Producer>;

    constructor(){
        this.ormRepository = AppDataSource.getRepository(Producer);
    }
        
    async create(data: ICreateProducerDTO): Promise<Producer> {        
        const producer = this.ormRepository.create(data)        
        return await this.ormRepository.save(producer);
    }
    async update(id: number, data: IUpdateProducerDTO): Promise<Producer> {
        const producer = await this.ormRepository.findOne({ where: {id}, relations:["crops"]})   

        if (!producer) {
            throw new AppError("The producer was not found");
        }


        const {document, nameProducer, nameFarm, city, estate, agricuturalArea, totalArea, vegetationArea, crops} = data;

        producer.document = document || producer.document;
        producer.nameProducer = nameProducer || producer.nameProducer;
        producer.nameFarm = nameFarm || producer.nameFarm;
        producer.city = city || producer.city;
        producer.estate = estate || producer.estate;
        producer.agricuturalArea = agricuturalArea || producer.agricuturalArea;
        producer.totalArea = totalArea || producer.totalArea;
        producer.vegetationArea = vegetationArea || producer.vegetationArea;
        
        if (crops) {
            producer.crops = crops.map(cropData => {
                const crop = new Crop();
                crop.description = cropData.description;                
                return crop;
            });
        }
    
        await this.ormRepository.save(producer);

        return producer;

    }
    async findAll(): Promise<Producer[]> {
        return await this.ormRepository.find();
    }
    async findById(id: number): Promise<Producer | null > {
        return await this.ormRepository.findOne({ where: {id}})        
    }
    async delete(id: number): Promise<void> {
        await this.ormRepository.delete(id);
    }

    async findByDocument(document: string): Promise<Producer | null> {
        return await this.ormRepository.findOne({ where: {document}})        
    }


}