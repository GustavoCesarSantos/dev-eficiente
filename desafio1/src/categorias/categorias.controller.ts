import { Body, Controller, Post } from '@nestjs/common';

import { Categoria } from './categoria.entity';
import { CriarCategoriaDTO } from './dto/categorias';
import { CriarCategoriaMemoriaRepository } from './repositorios/criar-categoria/criar-categoria-memoria.repository/criar-categoria-memoria.repository';

@Controller('categorias')
export class CategoriasController {
  constructor(
    private readonly criarCategoriaMemoriaRepository: CriarCategoriaMemoriaRepository,
  ) {}

  @Post()
  public async criarCategoria(
    @Body() criarCategoriaDTO: CriarCategoriaDTO,
  ): Promise<Categoria> {
    try {
      const novaCategoria = criarCategoriaDTO.toModel();
      return await this.criarCategoriaMemoriaRepository.criar(novaCategoria);
    } catch (error) {
      throw error;
    }
  }
}
