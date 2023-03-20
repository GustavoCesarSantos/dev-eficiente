import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { CriarAutorDTO } from './autores.dto';

@Controller('autores')
export class AutoresController {
  @Post()
  criarAutor(@Body() criarAutorDTO: CriarAutorDTO, @Res() response: Response) {
    return response.status(200).json({ created: 'ok' });
  }
}
