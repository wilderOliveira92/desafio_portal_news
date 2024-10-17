import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Producer from "./Producer";

@Entity("crop")
class Crop {

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    description:string;

    @ManyToOne(() => Producer, (producer) => producer.crops,{ onDelete: "CASCADE" })
    @JoinColumn({ name: 'producerid' }) 
    producer: Producer;

    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;

}

export default Crop;