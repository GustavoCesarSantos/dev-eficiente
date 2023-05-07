import { Body, Controller, Get, Post } from '@nestjs/common';

import { CriarLivroMemoriaRepository } from './repositorios/criar-livro/criar-livro-memoria.repository/criar-livro-memoria.repository';
import { ListarLivrosMemoriaRepository } from './repositorios/listar-livros/listar-livros-memoria.repository/listar-livros-memoria.repository';
import { Livro } from './livro.entity';
import { CriarLivroDTO } from './dto/livros.dto';

@Controller('livros')
export class LivrosController {
  constructor(
    private readonly criarLivroMemoriaRepository: CriarLivroMemoriaRepository,
    private readonly listarLivrosMemoriaRepository: ListarLivrosMemoriaRepository,
  ) {}

  @Post()
  public async criarLivo(@Body() criarLivroDTO: CriarLivroDTO): Promise<Livro> {
    try {
      const novoLivro = criarLivroDTO.toModel();
      return this.criarLivroMemoriaRepository.criar(novoLivro);
    } catch (error) {
      return error;
    }
  }

  @Get()
  public async listLivros(): Promise<{ id: string; titulo: string }[]> {
    try {
      return this.listarLivrosMemoriaRepository.listar();
    } catch (error) {
      return error;
    }
  }
}
