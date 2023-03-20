import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { Autor } from './autor.entity';
import { CriarAutorService } from './casos-de-uso/criar-autor/criar-autor.service';
import { CriarAutorDTO } from './dto/autores.dto';

@Controller('autores')
export class AutoresController {
  constructor(private criarAutorService: CriarAutorService) {}

  @Post()
  public async criarAutor(
    @Body() criarAutorDTO: CriarAutorDTO,
    @Res() response: Response,
  ): Promise<Response<Autor>> {
    const autor = await this.criarAutorService.executar(criarAutorDTO);
    return response.status(200).json(autor);
  }
}
