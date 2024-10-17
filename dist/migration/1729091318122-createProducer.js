"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProducer1729091318122 = void 0;
class CreateProducer1729091318122 {
    constructor() {
        this.name = 'CreateProducer1729091318122';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "producer" ("id" SERIAL NOT NULL, "document" character varying(14) NOT NULL, "nameProducer" character varying NOT NULL, "nameFarm" character varying NOT NULL, "city" character varying NOT NULL, "estate" character varying NOT NULL, "totalArea" integer NOT NULL, "agricuturalArea" integer NOT NULL, "vegetationArea" integer NOT NULL, "cropsPlanted" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4cfe496c2c70e4c9b9f444525a6" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`INSERT INTO "producer" (
                "document", "nameProducer", "nameFarm", "city", "estate", 
                "totalArea", "agricuturalArea", "vegetationArea", "cropsPlanted"
            ) 
            VALUES (12345678910, 'João', 'Fazenda do João', 'Rio de Janeiro', 'Rio de Janeiro', 100, 60, 40, 'Soja, Algodão'),
            (12345678910, 'José', 'Fazenda do José', 'Rio de Janeiro', 'Rio de Janeiro', 100, 60, 40, 'Soja, Algodão');`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP TABLE "producer"`);
        });
    }
}
exports.CreateProducer1729091318122 = CreateProducer1729091318122;
