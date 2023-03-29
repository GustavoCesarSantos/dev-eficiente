import { Module } from '@nestjs/common';

import { AutoresModule } from './autores/autores.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [AutoresModule, CategoriasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
