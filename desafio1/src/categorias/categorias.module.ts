import { Module } from '@nestjs/common';

import { CategoriasController } from './categorias.controller';
import { CriarCategoriaMemoriaRepository } from './repositorios/criar-categoria/criar-categoria-memoria.repository/criar-categoria-memoria.repository';
import { EncontrarCategoriaPeloNomeMemoriaRepository } from './repositorios/encontrar-categoia-pelo-nome/encontrar-categoria-pelo-nome-memoria.repository/encontrar-categoria-pelo-nome-memoria.repository';

@Module({
  imports: [],
  controllers: [CategoriasController],
  providers: [
    CriarCategoriaMemoriaRepository,
    EncontrarCategoriaPeloNomeMemoriaRepository,
  ],
})
export class CategoriasModule {}
