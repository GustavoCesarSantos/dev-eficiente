import { Body, Controller, Post } from '@nestjs/common';

import { CriarLivroMemoriaRepository } from '../repositorios/criar-livro/criar-livro-memoria.repository/criar-livro-memoria.repository';
import { CriarLivroRequest } from '../dto/livros.dto';
import { Livro } from '../livro.entity';

@Controller('livros')
export class CriarLivroController {
  constructor(
    private readonly criarLivroMemoriaRepository: CriarLivroMemoriaRepository,
  ) {}

  @Post()
  public async criarLivo(
    @Body() criarLivroDTO: CriarLivroRequest,
  ): Promise<Livro> {
    try {
      const novoLivro = criarLivroDTO.toModel();
      return this.criarLivroMemoriaRepository.criar(novoLivro);
    } catch (error) {
      return error;
    }
  }
}
