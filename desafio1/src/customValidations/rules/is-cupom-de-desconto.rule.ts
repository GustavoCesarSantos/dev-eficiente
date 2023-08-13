import { Injectable } from "@nestjs/common";
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

import { EncontrarCupomDeDescontoPeloCodigoMemoriaRepository } from "src/cupons-de-desconto/repositorios/encontrar-cupom-de-desconto-pelo-codigo-memoria.repository";

@ValidatorConstraint({ name: 'IsCupomDeDesconto', async: true })
@Injectable()
export class IsCupomDeDescontoRule implements ValidatorConstraintInterface {
    private errorMessage = '';

    constructor(private readonly encontrarCupomDeDescontoPeloCodigo: EncontrarCupomDeDescontoPeloCodigoMemoriaRepository) {}

    async validate(value: string) {
        try {
            const cupom = await this.encontrarCupomDeDescontoPeloCodigo.encontrar(value);
            if(!cupom) {
                this.errorMessage = "Cupom não encontrado";
                return false;
            }
            if (new Date().toISOString() > new Date(cupom.getValidade()).toISOString()) {
                this.errorMessage = "Cupom expirado";
                return false;
            }
            return true;
        } catch(error) {
            this.errorMessage = "Problemas com validação do cupom, tente novamente"
            return false;
        }
    }

    defaultMessage(args: ValidationArguments) {
        return this.errorMessage;
    }
}
