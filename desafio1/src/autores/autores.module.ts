import { Module } from '@nestjs/common';

import { AutoresController } from './autores.controller';
import { CriarAutorMemoriaRepository } from './repositorio/criar-autor/criar-autor-memoria.repository/criar-autor-memoria.repository';

@Module({
  imports: [],
  controllers: [AutoresController],
  providers: [CriarAutorMemoriaRepository],
})
export class AutoresModule {}
