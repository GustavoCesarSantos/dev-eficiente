import { Module } from '@nestjs/common';

import { CriarCompraController } from './controllers/criar-compra.controller';
import { CriarCompraMemoriaRepository } from './repositorios/criar-compra.memoria.repository';
import { ValidarTotalCompraService } from './services/validar-total-compra.service';
import { LivrosModule } from '../livros/livros.module';

@Module({
  imports: [LivrosModule],
  exports: [],
  controllers: [CriarCompraController],
  providers: [CriarCompraMemoriaRepository, ValidarTotalCompraService],
})
export class ComprasModule {}
