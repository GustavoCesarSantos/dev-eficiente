import { Module } from '@nestjs/common';

import { CriarPaisController } from './controllers/criar-pais.controller';
import { CriarEstadoController } from './controllers/criar-estado.controller';
import { CriarPaisMemoriaRepository } from './repositorios/criar-pais.memoria.repository';
import { EncontrarPaisPeloIdMemoriaRepository } from './repositorios/encontrar-pais-pelo-id.memoria.repository';
import { EncontrarPaisPeloNomeMemoriaRepository } from './repositorios/encontrar-pais-pelo-nome.memoria.repository';
import { CriarEstadoMemoriaRepository } from './repositorios/criar-estado.memoria.repository';
import { EncontrarEstadoPeloNomeMemoriaRepository } from './repositorios/encontrar-estado-pelo-nome.memoria.repository';
import { EncontrarEstadosPeloIdPaisMemoriaRepository } from './repositorios/encontrar-estados-pelo-id-pais.memoria.repository';
import { EncontrarEstadoPeloIdMemoriaRepository } from './repositorios/paises/repositorios/encontrar-estado-pelo-id.memoria.repository';

@Module({
  imports: [],
  exports: [
    EncontrarPaisPeloIdMemoriaRepository,
    EncontrarPaisPeloNomeMemoriaRepository,
    EncontrarEstadoPeloNomeMemoriaRepository,
    EncontrarEstadosPeloIdPaisMemoriaRepository,
    EncontrarEstadoPeloIdMemoriaRepository,
  ],
  controllers: [CriarPaisController, CriarEstadoController],
  providers: [
    CriarPaisMemoriaRepository,
    EncontrarPaisPeloIdMemoriaRepository,
    EncontrarPaisPeloNomeMemoriaRepository,
    CriarEstadoMemoriaRepository,
    EncontrarEstadoPeloNomeMemoriaRepository,
    EncontrarEstadosPeloIdPaisMemoriaRepository,
    EncontrarEstadoPeloIdMemoriaRepository,
  ],
})
export class PaisesModule {}
