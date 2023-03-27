import { Body, Controller, Post } from '@nestjs/common';

import { Autor } from './autor.entity';
import { CriarAutorService } from './casos-de-uso/criar-autor/criar-autor.service';
import { CriarAutorDTO } from './dto/autores.dto';

@Controller('autores')
export class AutoresController {
  constructor(private criarAutorService: CriarAutorService) {}

  @Post()
  public async criarAutor(
    @Body() criarAutorDTO: CriarAutorDTO,
  ): Promise<Autor> {
    try {
      const newAutor = criarAutorDTO.toModel();
      return await this.criarAutorService.execute(newAutor);
    } catch (error) {
      return error;
    }
  }
}
