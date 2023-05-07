import { Body, Controller, Post } from '@nestjs/common';

import { CriarLivroMemoriaRepository } from './repositorios/criar-livro/criar-livro-memoria.repository/criar-livro-memoria.repository';
import { Livro } from './livro.entity';
import { CriarLivroDTO } from './dto/livros.dto';

@Controller('livros')
export class LivrosController {
  constructor(
    private readonly criarLivroMemoriaRepository: CriarLivroMemoriaRepository,
  ) {}

  @Post()
  public async criarLivo(@Body() criarLivroDTO: CriarLivroDTO): Promise<Livro> {
    try {
      const novoLivro = criarLivroDTO.toModel();
      return await this.criarLivroMemoriaRepository.criar(novoLivro);
    } catch (error) {
      return error;
    }
  }
}
