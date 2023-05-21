import { Module } from '@nestjs/common';
import { CriarPaisController } from './controllers/criar-pais.controller';

@Module({
  controllers: [CriarPaisController]
})
export class PaisesModule {}
