import { Module } from '@nestjs/common';

import { CriarCupomDeDescontoController } from './controllers/criar-cupom-de-desconto.controller';
import { EncontrarCupomDeDescontoPeloCodigoMemoriaRepository } from './repositorios/encontrar-cupom-de-desconto-pelo-codigo-memoria.repository';
import { CriarCupomDeDescontoMemoriaRepository } from './repositorios/criar-cupom-de-desconto-memoria.repository';

@Module({
  imports: [],
  exports: [EncontrarCupomDeDescontoPeloCodigoMemoriaRepository],
  controllers: [CriarCupomDeDescontoController],
  providers: [
    EncontrarCupomDeDescontoPeloCodigoMemoriaRepository,
    CriarCupomDeDescontoMemoriaRepository,
  ],
})
export class CuponsDeDescontoModule {}
