import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateInitioal1729114124233 implements MigrationInterface {
    name = 'CreateInitioal1729114124233'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "crop" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "producerid" integer, CONSTRAINT "PK_f306910b05e2d54ed972a536a12" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "producer" ("id" SERIAL NOT NULL, "document" character varying(14) NOT NULL, "nameproducer" character varying NOT NULL, "namefarm" character varying NOT NULL, "city" character varying NOT NULL, "estate" character varying NOT NULL, "totalarea" integer NOT NULL, "agricuturalarea" integer NOT NULL, "vegetationarea" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4cfe496c2c70e4c9b9f444525a6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "crop" ADD CONSTRAINT "FK_8cedfd34934f317febeac98bf56" FOREIGN KEY ("producerid") REFERENCES "producer"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);

         //mock de dados
         await queryRunner.query(`INSERT INTO "producer" (
            "document", "nameproducer", "namefarm", "city", "estate", 
            "totalarea", "agricuturalarea", "vegetationarea"
            ) 
            VALUES (12345678910, 'João', 'Fazenda do João', 'Rio de Janeiro', 'Rio de Janeiro', 100, 60, 40),
            (12345678910, 'José', 'Fazenda do José', 'Rio de Janeiro', 'Rio de Janeiro', 100, 60, 40);`);
        await queryRunner.query(`INSERT INTO "crop" (description, created_at, updated_at, producerId)
            VALUES('Açucar', now(), now(), 1),
                ('Soja', now(), now(), 1),
                ('Milho', now(), now(), 1),
                ('Açucar', now(), now(), 2),
                ('Soja', now(), now(), 2),
                ('Milho', now(), now(), 2);`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "crop" DROP CONSTRAINT "FK_8cedfd34934f317febeac98bf56"`);
        await queryRunner.query(`DROP TABLE "producer"`);
        await queryRunner.query(`DROP TABLE "crop"`);
    }

}
