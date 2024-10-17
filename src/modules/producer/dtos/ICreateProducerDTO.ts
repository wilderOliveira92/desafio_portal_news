import Crop from "../infra/typeorm/entities/Crop";

export default interface ICreateProducerDTO {
    document:string;    
    nameProducer:string;    
    nameFarm:string;
    city:string;
    estate:string;
    totalArea:number;
    agricuturalArea:number;
    vegetationArea:number;
    crops:Crop[];
}