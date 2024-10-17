import ICreateProducerDTO from "@modules/producer/dtos/ICreateProducerDTO";
import IUpdateProducerDTO from "@modules/producer/dtos/IUpdateProducerDTO";
import Producer from "../infra/typeorm/entities/Producer";

export default interface IProducerRepository {
    create(data: ICreateProducerDTO): Promise<Producer>;
    update(id: number, data: IUpdateProducerDTO): Promise<Producer>;
    findAll(): Promise<Producer[]>;    
    findById(id: number): Promise<Producer | null>;
    findByDocument(document: string): Promise<Producer | null>;
    delete(id:number): Promise<void>;
}