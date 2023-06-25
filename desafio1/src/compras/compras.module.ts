import { Module } from '@nestjs/common';

import { CriarCompraController } from './controllers/criar-compra.controller';
import { CriarCompraMemoriaRepository } from './repositorios/criar-compra.memoria.repository';

@Module({
  imports: [],
  exports: [],
  controllers: [CriarCompraController],
  providers: [CriarCompraMemoriaRepository],
})
export class ComprasModule {}
