import { Body, Controller, NotFoundException, Post } from '@nestjs/common';

import { CriarLivroMemoriaRepository } from '../repositorios/criar-livro/criar-livro-memoria.repository/criar-livro-memoria.repository';
import { CriarLivroRequest, CriarLivroResponse } from '../dto/livros.dto';
import { EncontrarAutorMemoriaRepository } from '../../autores/repositorio/encontrar-autor-memoria.repository';
import { EncontrarCategoriaMemoriaRepository } from '../../categorias/repositorios/encontrar-categoria-memoria.repository';

@Controller('livros')
export class CriarLivroController {
  constructor(
    private readonly encontrarAutorMemoriaRepository: EncontrarAutorMemoriaRepository,
    private readonly encontrarCategoriaMemoriaRepository: EncontrarCategoriaMemoriaRepository,
    private readonly criarLivroMemoriaRepository: CriarLivroMemoriaRepository,
  ) {}

  @Post()
  public async criarLivo(
    @Body() criarLivroDTO: CriarLivroRequest,
  ): Promise<CriarLivroResponse> {
    try {
      const novoLivro = criarLivroDTO.toModel();
      const autor = await this.encontrarAutorMemoriaRepository.encontrar(
        novoLivro.getIdAutor(),
      );
      if (!autor) throw new NotFoundException('Autor não encontrado.');
      const categoria =
        await this.encontrarCategoriaMemoriaRepository.encontrar(
          novoLivro.getIdCategoria(),
        );
      if (!categoria) throw new NotFoundException('Categoria não encontrada.');
      const livro = this.criarLivroMemoriaRepository.criar(novoLivro);
      const criarLivroResponse = new CriarLivroResponse(
        livro,
        autor,
        categoria,
      );
      return criarLivroResponse;
    } catch (error) {
      throw error;
    }
  }
}
