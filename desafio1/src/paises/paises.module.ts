import { Module } from '@nestjs/common';
import { CriarPaisController } from './controllers/criar-pais.controller';
import { CriarEstadoController } from './controllers/criar-estado.controller';

@Module({
  controllers: [CriarPaisController, CriarEstadoController]
})
export class PaisesModule {}
