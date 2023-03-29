import { Module } from '@nestjs/common';

import { AutoresController } from './autores.controller';
import { CriarAutorMemoriaRepository } from './repositorio/criar-autor/criar-autor-memoria.repository/criar-autor-memoria.repository';
import { EncontrarAutorPeloEmailRepository } from './repositorio/encontrar-autor-pelo-email.repository/encontrar-autor-pelo-email.repository';

@Module({
  imports: [],
  exports: [EncontrarAutorPeloEmailRepository],
  controllers: [AutoresController],
  providers: [CriarAutorMemoriaRepository, EncontrarAutorPeloEmailRepository],
})
export class AutoresModule {}
