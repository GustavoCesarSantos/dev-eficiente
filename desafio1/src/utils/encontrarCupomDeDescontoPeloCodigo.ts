import { BadRequestException } from "@nestjs/common";

import { CupomDeDesconto } from "src/cupons-de-desconto/cupom-de-desconto.entity";
import { EncontrarCupomDeDescontoPeloCodigoMemoriaRepository } from "src/cupons-de-desconto/repositorios/encontrar-cupom-de-desconto-pelo-codigo-memoria.repository";

const encontrarCupomDeDescontoPeloCodigoRepository = new EncontrarCupomDeDescontoPeloCodigoMemoriaRepository();

export const encontrarCupomDeDescontoPeloCodigo = async (codigo: string): Promise<CupomDeDesconto>  => {
    try {
        const cupom = await encontrarCupomDeDescontoPeloCodigoRepository.encontrar(codigo);
        if(!cupom)  throw new BadRequestException("Cupom de desconto não existe");
        return cupom;
    } catch (error) {
        throw new BadRequestException(error.message);
    }
}
