import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

import { EncontrarLivroMemoriaRepository } from '../repositorios/encontrar-livro/encontrar-livro-memoria.repository/encontrar-livro-memoria.repository';
import { EncontrarLivroRequest } from '../dto/livros.dto';
import { Livro } from '../livro.entity';

@Controller('livros')
export class EncontrarLivroController {
  constructor(
    private readonly encontrarLivroMemoriaRepository: EncontrarLivroMemoriaRepository,
  ) {}

  @Get(':id')
  public async encontrarLivro(
    @Param() params: EncontrarLivroRequest,
  ): Promise<Livro> {
    try {
      const livro = this.encontrarLivroMemoriaRepository.encontrar(params.id);
      if (!livro) throw new NotFoundException('Livro não encontrado.');
      return livro;
    } catch (error) {
      throw error;
    }
  }
}
