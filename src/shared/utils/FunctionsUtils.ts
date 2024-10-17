import { cpf, cnpj } from "cpf-cnpj-validator";

class FunctionsUtils {

    public validateCpf(strCpf:string): boolean {
        return cpf.isValid(strCpf);
    }

    public validateCnpj(strCnpj:string): boolean {
        return cnpj.isValid(strCnpj);
    }

    public removeMask(document: string): string {        
        return document.replace(/\D/g, '');
    }

}

export default new FunctionsUtils();