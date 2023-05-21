import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

import { EncontrarLivroMemoriaRepository } from '../repositorios/encontrar-livro/encontrar-livro-memoria.repository/encontrar-livro-memoria.repository';
import {
  EncontrarLivroRequest,
  EncontrarLivroResponse,
} from '../dto/livros.dto';
import { EncontrarAutorMemoriaRepository } from '../../autores/repositorio/encontrar-autor-memoria.repository';
import { EncontrarCategoriaMemoriaRepository } from '../../categorias/repositorios/encontrar-categoria-memoria.repository';

@Controller('livros')
export class EncontrarLivroController {
  constructor(
    private readonly encontrarLivroMemoriaRepository: EncontrarLivroMemoriaRepository,
    private readonly encontrarAutorMemoriaRepository: EncontrarAutorMemoriaRepository,
    private readonly encontrarCategoriaMemoriaRepository: EncontrarCategoriaMemoriaRepository,
  ) {}

  @Get(':id')
  public async encontrarLivro(
    @Param() params: EncontrarLivroRequest,
  ): Promise<EncontrarLivroResponse> {
    try {
      const livro = this.encontrarLivroMemoriaRepository.encontrar(params.id);
      if (!livro) throw new NotFoundException('Livro não encontrado.');
      const autor = await this.encontrarAutorMemoriaRepository.encontrar(
        livro.getIdAutor(),
      );
      if (!autor) throw new NotFoundException('Autor não encontrado.');
      const categoria =
        await this.encontrarCategoriaMemoriaRepository.encontrar(
          livro.getIdCategoria(),
        );
      if (!categoria) throw new NotFoundException('Categoria não encontrada.');
      const encontrarLivroResponse = new EncontrarLivroResponse(
        livro,
        autor,
        categoria,
      );
      return encontrarLivroResponse;
    } catch (error) {
      throw error;
    }
  }
}
