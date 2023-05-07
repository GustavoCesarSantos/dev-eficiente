import { Module } from '@nestjs/common';

import { LivrosController } from './livros.controller';
import { CriarLivroMemoriaRepository } from './repositorios/criar-livro/criar-livro-memoria.repository/criar-livro-memoria.repository';
import { ListarLivrosMemoriaRepository } from './repositorios/listar-livros/listar-livros-memoria.repository/listar-livros-memoria.repository';

@Module({
  imports: [],
  exports: [],
  controllers: [LivrosController],
  providers: [CriarLivroMemoriaRepository, ListarLivrosMemoriaRepository],
})
export class LivrosModule {}
