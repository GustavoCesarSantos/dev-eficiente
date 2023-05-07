import { Module } from '@nestjs/common';

import { LivrosController } from './livros.controller';
import { CriarLivroMemoriaRepository } from './repositorios/criar-livro/criar-livro-memoria.repository/criar-livro-memoria.repository';

@Module({
  imports: [],
  exports: [],
  controllers: [LivrosController],
  providers: [CriarLivroMemoriaRepository],
})
export class LivrosModule {}
