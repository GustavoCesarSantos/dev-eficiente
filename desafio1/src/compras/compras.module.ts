import { Module } from '@nestjs/common';

import { CriarCompraController } from './controllers/criar-compra.controller';
import { CriarCompraMemoriaRepository } from './repositorios/criar-compra.memoria.repository';
import { ValidarTotalCompraService } from './services/validar-total-compra.service';
import { LivrosModule } from '../livros/livros.module';
import { DetalharCompraController } from './controllers/detalhar-compra.controller';
import { EncontrarCompraPeloIdMemoriaRepository } from './repositorios/encontrar-compra-pelo-id-memoria.repository';

@Module({
  imports: [LivrosModule],
  exports: [],
  controllers: [CriarCompraController, DetalharCompraController],
  providers: [
    CriarCompraMemoriaRepository,
    ValidarTotalCompraService,
    EncontrarCompraPeloIdMemoriaRepository,
  ],
})
export class ComprasModule {}
