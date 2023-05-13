import { Module } from '@nestjs/common';

import { CategoriasController } from './categorias.controller';
import { CriarCategoriaMemoriaRepository } from './repositorios/criar-categoria/criar-categoria-memoria.repository/criar-categoria-memoria.repository';
import { EncontrarCategoriaPeloNomeMemoriaRepository } from './repositorios/encontrar-categoia-pelo-nome/encontrar-categoria-pelo-nome-memoria.repository/encontrar-categoria-pelo-nome-memoria.repository';
import { EncontrarCategoriaMemoriaRepository } from './repositorios/encontrar-categoria-memoria.repository';

@Module({
  imports: [],
  exports: [
    EncontrarCategoriaMemoriaRepository,
    EncontrarCategoriaPeloNomeMemoriaRepository,
  ],
  controllers: [CategoriasController],
  providers: [
    CriarCategoriaMemoriaRepository,
    EncontrarCategoriaMemoriaRepository,
    EncontrarCategoriaPeloNomeMemoriaRepository,
  ],
})
export class CategoriasModule {}
