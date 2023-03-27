import { Module } from '@nestjs/common';

import { AutoresController } from './autores.controller';
import { EmailInUseRule } from './customValidation/rules/email-in-use.rule';
import { CriarAutorMemoriaRepository } from './repositorio/criar-autor/criar-autor-memoria.repository/criar-autor-memoria.repository';
import { EncontrarAutorPeloEmailRepository } from './repositorio/encontrar-autor-pelo-email.repository/encontrar-autor-pelo-email.repository';

@Module({
  imports: [],
  controllers: [AutoresController],
  providers: [
    CriarAutorMemoriaRepository,
    EncontrarAutorPeloEmailRepository,
    EmailInUseRule,
  ],
})
export class AutoresModule {}
