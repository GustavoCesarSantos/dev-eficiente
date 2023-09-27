import { Module } from '@nestjs/common';

import { CriarCompraController } from './controllers/criar-compra.controller';
import { CriarCompraMemoriaRepository } from './repositorios/criar-compra.memoria.repository';
import { ValidarTotalCompraService } from './services/validar-total-compra.service';
import { LivrosModule } from '../livros/livros.module';
import { DetalharCompraController } from './controllers/detalhar-compra.controller';
import { EncontrarCompraPeloIdMemoriaRepository } from './repositorios/encontrar-compra-pelo-id-memoria.repository';
import { PaisesModule } from 'src/paises/paises.module';
import { PegarTotalSemDescontoService } from './services/pegar-total-sem-desconto.service';

@Module({
  imports: [LivrosModule, PaisesModule],
  exports: [],
  controllers: [CriarCompraController, DetalharCompraController],
  providers: [
    CriarCompraMemoriaRepository,
    ValidarTotalCompraService,
    EncontrarCompraPeloIdMemoriaRepository,
    PegarTotalSemDescontoService,
  ],
})
export class ComprasModule {}
