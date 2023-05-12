import { Controller, Get } from '@nestjs/common';

import { ListarLivrosMemoriaRepository } from '../repositorios/listar-livros/listar-livros-memoria.repository/listar-livros-memoria.repository';
import { ListarLivrosResponse } from '../dto/livros.dto';

@Controller('livros')
export class ListarLivrosController {
  constructor(
    private readonly listarLivrosMemoriaRepository: ListarLivrosMemoriaRepository,
  ) {}

  @Get()
  public async listarLivros(): Promise<ListarLivrosResponse[]> {
    try {
      const livros = await this.listarLivrosMemoriaRepository.listar();
      return livros.map((livro) => new ListarLivrosResponse(livro));
    } catch (error) {
      return error;
    }
  }
}
