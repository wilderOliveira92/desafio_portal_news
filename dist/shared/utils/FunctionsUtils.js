"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cpf_cnpj_validator_1 = require("cpf-cnpj-validator");
class FunctionsUtils {
    validateCpf(strCpf) {
        return cpf_cnpj_validator_1.cpf.isValid(strCpf);
    }
    validateCnpj(strCnpj) {
        return cpf_cnpj_validator_1.cnpj.isValid(strCnpj);
    }
    removeMask(document) {
        return document.replace(/\D/g, '');
    }
}
exports.default = new FunctionsUtils();
