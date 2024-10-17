import Producer from "../infra/typeorm/entities/Producer";

export default interface IDashboardDTO {
    totalFarm: number;
    totalHectares: number;
    producers:Producer[];
}