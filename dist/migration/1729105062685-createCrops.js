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
exports.CreateCrops1729105062685 = void 0;
class CreateCrops1729105062685 {
    constructor() {
        this.name = 'CreateCrops1729105062685';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "crop" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "producerId" integer, CONSTRAINT "PK_f306910b05e2d54ed972a536a12" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "producer" DROP COLUMN "cropsPlanted"`);
            yield queryRunner.query(`ALTER TABLE "crop" ADD CONSTRAINT "FK_c7b58900c579dff76afc6335cd3" FOREIGN KEY ("producerId") REFERENCES "producer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "crop" DROP CONSTRAINT "FK_c7b58900c579dff76afc6335cd3"`);
            yield queryRunner.query(`ALTER TABLE "producer" ADD "cropsPlanted" character varying NOT NULL`);
            yield queryRunner.query(`DROP TABLE "crop"`);
        });
    }
}
exports.CreateCrops1729105062685 = CreateCrops1729105062685;
