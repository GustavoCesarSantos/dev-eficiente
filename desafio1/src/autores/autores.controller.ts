import { Body, Controller, Post } from '@nestjs/common';

import { Autor } from './autor.entity';
import { CriarAutorDTO } from './dto/autores.dto';
import { CriarAutorMemoriaRepository } from './repositorio/criar-autor/criar-autor-memoria.repository/criar-autor-memoria.repository';

@Controller('autores')
export class AutoresController {
  constructor(
    private readonly criarAutorRepository: CriarAutorMemoriaRepository,
  ) {}

  @Post()
  public async criarAutor(
    @Body() criarAutorDTO: CriarAutorDTO,
  ): Promise<Autor> {
    try {
      const novoAutor = criarAutorDTO.toModel();
      return await this.criarAutorRepository.criar(novoAutor);
    } catch (error) {
      throw error;
    }
  }
}
