import { Module } from '@nestjs/common';

import { AutoresController } from './autores.controller';
import { CriarAutorService } from './casos-de-uso/criar-autor/criar-autor.service';
import { CriarAutorMemoriaRepository } from './repositorio/criar-autor/criar-autor-memoria.repository/criar-autor-memoria.repository';

@Module({
  imports: [],
  controllers: [AutoresController],
  providers: [CriarAutorService, CriarAutorMemoriaRepository],
})
export class AutoresModule {}
