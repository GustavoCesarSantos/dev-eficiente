import { Module } from '@nestjs/common';

import { CriarLivroController } from './controllers/criar-livro.controller';
import { ListarLivrosController } from './controllers/listar-livros.controller';
import { EncontrarLivroController } from './controllers/encontrar-livro.controller';
import { CriarLivroMemoriaRepository } from './repositorios/criar-livro/criar-livro-memoria.repository/criar-livro-memoria.repository';
import { ListarLivrosMemoriaRepository } from './repositorios/listar-livros/listar-livros-memoria.repository/listar-livros-memoria.repository';
import { EncontrarLivroMemoriaRepository } from './repositorios/encontrar-livro/encontrar-livro-memoria.repository/encontrar-livro-memoria.repository';
import { EncontrarLivroPeloTituloMemoriaRepository } from './repositorios/encontrar-livro-pelo-titulo-memoria.repository';
import { EncontrarLivroPeloIsbnMemoriaRepository } from './repositorios/encontrar-livro-pelo-isbn-memoria.repository';

@Module({
  imports: [],
  exports: [
    EncontrarLivroPeloTituloMemoriaRepository,
    EncontrarLivroPeloIsbnMemoriaRepository,
  ],
  controllers: [
    CriarLivroController,
    ListarLivrosController,
    EncontrarLivroController,
  ],
  providers: [
    CriarLivroMemoriaRepository,
    ListarLivrosMemoriaRepository,
    EncontrarLivroMemoriaRepository,
    EncontrarLivroPeloTituloMemoriaRepository,
    EncontrarLivroPeloIsbnMemoriaRepository,
  ],
})
export class LivrosModule {}
