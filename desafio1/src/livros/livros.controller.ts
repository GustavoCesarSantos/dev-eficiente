import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';

import { CriarLivroMemoriaRepository } from './repositorios/criar-livro/criar-livro-memoria.repository/criar-livro-memoria.repository';
import { ListarLivrosMemoriaRepository } from './repositorios/listar-livros/listar-livros-memoria.repository/listar-livros-memoria.repository';
import { EncontrarLivroMemoriaRepository } from './repositorios/encontrar-livro/encontrar-livro-memoria.repository/encontrar-livro-memoria.repository';
import { Livro } from './livro.entity';
import { CriarLivroDTO, EncontrarLivroDTO } from './dto/livros.dto';

@Controller('livros')
export class LivrosController {
  constructor(
    private readonly criarLivroMemoriaRepository: CriarLivroMemoriaRepository,
    private readonly listarLivrosMemoriaRepository: ListarLivrosMemoriaRepository,
    private readonly encontrarLivroMemoriaRepository: EncontrarLivroMemoriaRepository,
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

  @Get(':id')
  public async encontrarLivro(
    @Param() params: EncontrarLivroDTO,
  ): Promise<Livro> {
    try {
      const livro = this.encontrarLivroMemoriaRepository.encontrar(params.id);
      if (!livro) throw new NotFoundException();
      return livro;
    } catch (error) {
      return error;
    }
  }
}
