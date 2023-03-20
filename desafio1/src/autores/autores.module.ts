import { Module } from '@nestjs/common';

import { AutoresController } from './autores.controller';
import { CriarAutorService } from './casos-de-uso/criar-autor/criar-autor.service';
import { CriarAutorEmMemoriaRepository } from './repositorio/criar-autor-memoria.repository';

@Module({
  imports: [],
  controllers: [AutoresController],
  providers: [CriarAutorService, CriarAutorEmMemoriaRepository],
})
export class AutoresModule {}
