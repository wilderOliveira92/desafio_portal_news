import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Crop from "./Crop";

@Entity("producer")
class Producer {

    // CPF ou CNPJ
    // Nome do produtor
    // Nome da Fazenda
    // Cidade
    // Estado
    // Área total em hectares da fazenda
    // Área agricultável em hectares
    // Área de vegetação em hectares
    // Culturas plantadas (Soja, Milho, Algodão, Café, Cana de Açucar)

    @PrimaryGeneratedColumn()
    id:number;
    @Column({type: 'varchar', length: 14})
    document:string;
    @Column({name:'nameproducer'})
    nameProducer:string;
    @Column({name:'namefarm'})
    nameFarm:string;
    @Column()
    city:string;
    @Column()
    estate:string;
    @Column({name:'totalarea'})
    totalArea:number;
    @Column({name:'agricuturalarea'})
    agricuturalArea:number;
    @Column({name:'vegetationarea'})
    vegetationArea:number;
    
    @OneToMany(() => Crop, (crop)=> crop.producer, {
        cascade: true,
        eager:true
    })
    crops:Crop[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Producer;