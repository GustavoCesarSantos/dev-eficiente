import { Module } from '@nestjs/common';

import { CriarCompraController } from './controllers/criar-compra.controller';

@Module({
  controllers: [CriarCompraController],
})
export class ComprasModule {}
