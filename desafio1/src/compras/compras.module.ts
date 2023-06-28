import { Module } from '@nestjs/common';

import { CriarCompraController } from './controllers/criar-compra.controller';
import { CriarCompraMemoriaRepository } from './repositorios/criar-compra.memoria.repository';
import { ListarLivrosPelosIdsMemoriaRepository } from '../livros/repositorios/listar-livros-pelos-ids-memoria.repository';
import { ValidarTotalCompraService } from './services/validar-total-compra.service';

@Module({
  imports: [ListarLivrosPelosIdsMemoriaRepository],
  exports: [],
  controllers: [CriarCompraController],
  providers: [CriarCompraMemoriaRepository, ValidarTotalCompraService],
})
export class ComprasModule {}
